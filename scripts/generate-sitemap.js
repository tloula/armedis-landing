const fs = require("fs");
const path = require("path");

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://checkinmore.com";
const staticRoutes = [
  "", // homepage
  "faqs",
  "how-it-works",
  "terms",
  "privacy",
  "data-request",
  "cookies",
  "contact",
];

const urls = staticRoutes
  .map((route) => {
    return `<url><loc>${baseUrl}/${route}</loc></url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls}\n</urlset>`;

const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap);
console.log("sitemap.xml generated at", outputPath);
