import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPengurus() {
  const dir = path.join(process.cwd(), "contents/pengurus");
  const files = ["ketua.md", "sekretaris.md", "bendahara.md"];

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      ...data,
      id: filename.replace(".md", ""),
    };
  });
}