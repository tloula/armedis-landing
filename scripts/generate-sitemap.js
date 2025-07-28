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
  "blog",
];

// Get blog posts from the generated blog data
function getBlogPosts() {
  try {
    const blogDataPath = path.join(__dirname, "../src/libs/blogData.js");
    if (!fs.existsSync(blogDataPath)) {
      console.log("Blog data not found, skipping blog posts in sitemap");
      return [];
    }
    
    // Read and parse the blog data
    const blogDataContent = fs.readFileSync(blogDataPath, "utf8");
    // Extract the array from the export default statement
    const match = blogDataContent.match(/export default (\[[\s\S]*\]);/);
    if (!match) {
      console.log("Could not parse blog data, skipping blog posts in sitemap");
      return [];
    }
    
    const blogPosts = eval(match[1]);
    return blogPosts.map(post => `blog/${post.slug}`);
  } catch (error) {
    console.log("Error reading blog data:", error.message);
    return [];
  }
}

const blogRoutes = getBlogPosts();
const allRoutes = [...staticRoutes, ...blogRoutes];

const urls = allRoutes
  .map((route) => {
    return `<url><loc>${baseUrl}/${route}</loc></url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls}\n</urlset>`;

const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap);
console.log("sitemap.xml generated at", outputPath);
console.log(`Included ${blogRoutes.length} blog posts in sitemap`);
