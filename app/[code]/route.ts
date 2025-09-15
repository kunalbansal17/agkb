import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { isBot, deviceType } from "@/lib/bots";
import { env } from "@/lib/env";

export const runtime = "edge";

function hashIp(ip: string, salt: string): string {
  const s = ip + "|" + salt;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return `h${h >>> 0}`;
}

export async function GET(req: NextRequest, { params }: { params: { code: string } }) {
  const code = params.code;

  if (!code || code.includes("/")) {
    return NextResponse.json({ error: "bad code" }, { status: 400 });
  }

  const [link] = await db.select().from(links).where(eq(links.code, code)).limit(1);
  if (!link || !link.isActive) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // best-effort beacon (don’t await)
  try {
    const ua = req.headers.get("user-agent");
    const referrer = req.headers.get("referer");
    const ip = req.ip ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const country = (req.geo?.country || "") as string;
    const region = (req.geo?.region || "") as string;
    const city = (req.geo?.city || "") as string;

    const payload = {
      code,
      referrer,
      ua,
      ipHash: ip ? hashIp(ip, env.HASH_SALT) : "",
      country,
      region,
      city,
      deviceType: deviceType(ua),
      bot: isBot(ua),
    };

    // fire-and-forget; keepalive helps finish after redirect

    fetch(new URL("/api/v1/ingest-click", req.url), {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": env.API_KEY },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  return NextResponse.redirect(link.url, 307);
}
