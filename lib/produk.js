import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getProduk() {
  const dir = path.join(process.cwd(), "contents/produk");
  const files = fs.readdirSync(dir);

  const produk = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents); 
    return { ...data, slug: filename.replace(".md", "") };
  });

  const sorted = produk.sort((a, b) => {
    if (a.unggulan === b.unggulan) {
      return a.name.localeCompare(b.name);
    }
    return b.unggulan - a.unggulan;
  });

  return sorted;
}
