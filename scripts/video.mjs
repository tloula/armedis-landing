/**
 * Records a high-quality MP4 of the HeroAnimation for marketing use.
 *
 * Prerequisites:
 *   npm install -D @playwright/test
 *   npx playwright install chromium
 *   ffmpeg must be available on PATH, or set FFMPEG_PATH
 *
 * Usage (dev server must be running):
 *   npm run dev
 *   npm run generate:video
 *
 * Environment variables:
 *   VIDEO_URL           Override the default capture page URL
 *   VIDEO_DURATION_MS   Capture duration in ms (default: 9000)
 *   VIDEO_NAME          Output basename (default: hero-animation)
 *   VIDEO_TRIM_START_MS Trim this much from the front of the raw recording (default: 800)
 *   FFMPEG_PATH         Custom ffmpeg executable path
 *   VIDEO_KEEP_RAW      Keep the intermediate webm capture (default: false)
 */

import { chromium } from "@playwright/test";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "videos");

const BASE_URL = process.env.VIDEO_URL ?? "http://localhost:3000/video-helper";
const DURATION_MS = Number.parseInt(process.env.VIDEO_DURATION_MS ?? "9000", 10);
const VIDEO_NAME = process.env.VIDEO_NAME ?? "hero-animation";
const TRIM_START_MS = Number.parseInt(process.env.VIDEO_TRIM_START_MS ?? "800", 10);
const FFMPEG_PATH = process.env.FFMPEG_PATH ?? "ffmpeg";
const KEEP_RAW = process.env.VIDEO_KEEP_RAW === "true";

fs.mkdirSync(outDir, { recursive: true });

const ffmpegCheck = spawnSync(FFMPEG_PATH, ["-version"], { stdio: "ignore" });
const hasFfmpeg = ffmpegCheck.status === 0;

console.log(`Recording ${Math.round(DURATION_MS / 100) / 10}s from ${BASE_URL}`);

const browser = await chromium.launch();
const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    recordVideo: {
        dir: outDir,
        size: { width: 1080, height: 1080 },
    },
});
const page = await context.newPage();
const recordedVideo = page.video();

await page.goto(BASE_URL, { waitUntil: "networkidle" });
await page.addStyleTag({
    content: `
        html, body { margin: 0 !important; background: #fff !important; }
        header, footer { display: none !important; }
    `,
});
await page.waitForTimeout(DURATION_MS);

await page.close();
await context.close();
await browser.close();

const rawPath = await recordedVideo.path();
const rawOutputPath = path.join(outDir, `${VIDEO_NAME}.webm`);
const outputPath = path.join(outDir, `${VIDEO_NAME}.mp4`);

if (fs.existsSync(rawOutputPath)) {
    fs.rmSync(rawOutputPath, { force: true });
}
fs.copyFileSync(rawPath, rawOutputPath);

if (!hasFfmpeg) {
    console.error(
        [
            "Recorded a .webm successfully, but ffmpeg was not found for MP4 conversion.",
            `Raw video: ${rawOutputPath}`,
            "Install ffmpeg or set FFMPEG_PATH, then run:",
            `${FFMPEG_PATH} -y -ss ${TRIM_START_MS / 1000} -t ${DURATION_MS / 1000} -i "${rawOutputPath}" -c:v libx264 -pix_fmt yuv420p "${outputPath}"`,
        ].join("\n"),
    );
    process.exit(1);
}

const ffmpegArgs = [
    "-y",
    "-ss",
    String(TRIM_START_MS / 1000),
    "-t",
    String(DURATION_MS / 1000),
    "-i",
    rawOutputPath,
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    outputPath,
];

const ffmpegRun = spawnSync(FFMPEG_PATH, ffmpegArgs, { stdio: "inherit" });

if (ffmpegRun.status !== 0) {
    process.exit(ffmpegRun.status ?? 1);
}

if (!KEEP_RAW) {
    fs.rmSync(rawOutputPath, { force: true });
}

console.log(`\nSaved video to: ${outputPath}`);
console.log(
    KEEP_RAW
        ? `Raw capture kept at: ${rawOutputPath}`
        : "Temporary raw webm removed after encoding.",
);
