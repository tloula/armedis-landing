/**
 * Captures transparent-background PNGs of each HeroAnimation scene.
 *
 * Prerequisites:
 *   npm install -D @playwright/test
 *   npx playwright install chromium
 *
 * Usage (dev server must be running):
 *   npm run dev          # in one terminal
 *   node scripts/screenshot.mjs   # in another
 *
 * Environment variables:
 *   SCREENSHOT_URL       Override the base URL (default: http://localhost:3000)
 *   SCREENSHOT_VARIANT   Set to "ad" for larger, more readable exports
 *
 * Output: screenshots/{notification,checkin,complete,missed}.png
 */

import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const variant = process.env.SCREENSHOT_VARIANT ?? "default";
const outDir = variant === "ad"
    ? path.join(__dirname, "..", "screenshots", "ad")
    : path.join(__dirname, "..", "screenshots");
fs.mkdirSync(outDir, { recursive: true });

const BASE_URL = process.env.SCREENSHOT_URL ?? "http://localhost:3000";
const scenes = [
    "notification",
    "checkin",
    "complete",
    "missed",
    "bubble-sms-success",
    "bubble-sms-alert",
    "bubble-phone-call",
];

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 3 });

// Disable animations — framer-motion respects prefers-reduced-motion and snaps
// to final state immediately, so we don't have to time our screenshots.
await page.emulateMedia({ reducedMotion: "reduce" });

// Use a wide viewport so Tailwind md: breakpoints apply (bubbles use md: offsets).
await page.setViewportSize({ width: 1440, height: 900 });

const helperUrl = new URL("/screenshot-helper", BASE_URL);
if (variant !== "default") {
    helperUrl.searchParams.set("variant", variant);
}

await page.goto(helperUrl.toString());

// Override the body/html background that globals.css sets — omitBackground only
// strips the browser's default canvas, not explicit CSS background colors.
// Also hide the site header/footer which are fixed/sticky and would overlap the scenes.
await page.addStyleTag({
    content: `
        html, body { background: transparent !important; }
        header, footer { display: none !important; }
    `,
});

// Wait long enough for:
//   - React hydration
//   - The bell animation (delay: 1.2s + duration: 0.5s = ~1.7s)
//   - The mood-selection timer in CheckInContent (1s)
await page.waitForTimeout(3000);

for (const scene of scenes) {
    const el = page.locator(`[data-scene="${scene}"]`);
    const outPath = path.join(outDir, `${scene}.png`);
    await el.screenshot({ path: outPath, omitBackground: true });
    console.log(`✓  ${scene}.png`);
}

await browser.close();
console.log(`\nSaved ${variant} screenshots to: ${outDir}`);
