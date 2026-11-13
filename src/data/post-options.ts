import { t } from "../i18n";
export const categoryNames = [
  "writing",
  "art",
  "video",
  "coding",
  "office",
  "b2b",
  "sim",
] as const;
export type Category = (typeof categoryNames)[number];
export const categoryLabel = (category: string) =>
  categoryNames.includes(category as Category)
    ? t(`category.${category as Category}`)
    : category;
// Preserve frontmatter written with Chinese category labels.
export function normalizeCategory(value: string): string {
  const legacy: Record<string, Category> = {
    "AI 写作": "writing",
    "AI 绘画": "art",
    "AI 视频": "video",
    "AI 编程": "coding",
    "AI 办公": "office",
    "B2B 软件": "b2b",
    "保号电话卡": "sim",
  };
  return (
    legacy[value] ??
    categoryNames.find((category) => categoryLabel(category) === value) ??
    value
  );
}
export const coverNames = [
  "tool",
  "astro",
  "vue",
  "css",
  "notes",
  "life",
  "typescript",
  "git",
  "design",
] as const;
