const bots = [
  "bot","crawler","spider","curl","wget","facebookexternalhit","slurp",
  "bingpreview","python-requests","axios","httpclient","node-fetch"
];

export function isBot(ua: string | null): boolean {
  if (!ua) return false;
  const l = ua.toLowerCase();
  return bots.some(b => l.includes(b));
}

export function deviceType(ua: string | null): "mobile" | "desktop" | "tablet" | "unknown" {
  if (!ua) return "unknown";
  const l = ua.toLowerCase();
  if (/(ipad|tablet)/.test(l)) return "tablet";
  if (/(mobi|iphone|android)/.test(l)) return "mobile";
  return "desktop";
}
