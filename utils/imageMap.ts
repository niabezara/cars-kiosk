import { imageMap } from "@/data/dummyData";

export function get360Images(prefix: string, count: number): number[] {
  return Array.from({ length: count }, (_, i) => {
    const key = `${prefix}${i + 1}`;
    const src = imageMap[key];
    if (!src) throw new Error(`[imageMap] missing key: "${key}"`);
    return src;
  });
}
