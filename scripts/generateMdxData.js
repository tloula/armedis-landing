const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getMdxFiles(dir) {
  const directory = path.join(process.cwd(), dir);
  if (!fs.existsSync(directory)) {
    console.log(`Directory ${directory} does not exist. Creating empty blogData.js`);
    return [];
  }
  return fs.readdirSync(directory).filter((f) => f.endsWith(".mdx"));
}

function parseMdxFile(dir, fileName) {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(process.cwd(), dir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Calculate estimated read time (assuming 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  
  return {
    slug,
    ...data,
    content,
    readTime: `${readTime} min read`,
  };
}

function generateBlogData() {
  const files = getMdxFiles("src/markdown/blog");
  const posts = files.map((file) => parseMdxFile("src/markdown/blog", file));
  const outPath = path.join(process.cwd(), "src/libs", "blogData.js");
  
  // Ensure libs directory exists
  const libsDir = path.join(process.cwd(), "src/libs");
  if (!fs.existsSync(libsDir)) {
    fs.mkdirSync(libsDir, { recursive: true });
  }
  
  const js = `// AUTO-GENERATED FILE. DO NOT EDIT.\nexport default ${JSON.stringify(posts, null, 2)};\n`;
  fs.writeFileSync(outPath, js);
  console.log(`Generated blogData.js with ${posts.length} posts.`);
}

generateBlogData(); 