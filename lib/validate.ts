export function normalizeUrl(raw: string): string {
  const s = raw.trim();
  if (!s) return s;
  if (!/^https?:\/\//i.test(s)) return `https://${s.replace(/^\/\//, "")}`;
  return s;
}
export function isValidAbsoluteHttpUrl(u: string): boolean {
  try {
    const x = new URL(u);
    return x.protocol === "http:" || x.protocol === "https:";
  } catch { return false; }
}
export function isValidAlias(s: string): boolean {
  return /^[a-zA-Z0-9_-]{3,32}$/.test(s);
}
export const RESERVED = new Set(["api","analytics","admin","_next","favicon.ico"]);
