import { readdirSync, existsSync } from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpg|jpeg|webp|gif|avif)$/i;

export function getProjectImages(folder: string): string[] {
  const fullPath = path.join(process.cwd(), "public", folder);
  if (!existsSync(fullPath)) return [];

  return readdirSync(fullPath)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()
    .map((f) => `/${folder}/${f}`);
}
