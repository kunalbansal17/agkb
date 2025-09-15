import { env } from "./env";

const ALLOW_HEADERS = ["content-type", "x-api-key"].join(", ");
const ALLOW_METHODS = ["GET", "POST", "OPTIONS"].join(", ");

export function corsHeaders(origin: string | null): Headers {
  const headers = new Headers();
  if (origin && env.ALLOWED_ORIGINS.includes(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }
  headers.set("Vary", "Origin");
  headers.set("Access-Control-Allow-Methods", ALLOW_METHODS);
  headers.set("Access-Control-Allow-Headers", ALLOW_HEADERS);
  return headers;
}

export function handleOptions(req: Request): Response | null {
  if (req.method !== "OPTIONS") return null;
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  return new Response(null, { headers });
}

export function withCors(req: Request, res: Response): Response {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  const out = new Response(res.body, res);
  headers.forEach((v, k) => out.headers.set(k, v));
  return out;
}
