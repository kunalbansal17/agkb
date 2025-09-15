// app/[code]/route.ts
import 'server-only';                     // ← server bundle only
export const dynamic = 'force-dynamic';   // ← never prerender / collect static data
export const runtime = 'nodejs';          // ← run on Node (not Edge)

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { isBot, deviceType } from "@/lib/bots";
import { env } from "@/lib/env";

// Tiny non-crypto hash for daily-unique approximation
function hashIp(ip: string, salt: string): string {
  const s = ip + "|" + salt;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return `h${h >>> 0}`;
}

export async function GET(req: Request, { params }: { params: { code: string } }) {
  const code = params.code;
  if (!code || code.includes("/")) {
    return NextResponse.json({ error: "bad code" }, { status: 400 });
  }

  // DB lookup (Node runtime can use pg)
  let link;
  try {
    [link] = await db.select().from(links).where(eq(links.code, code)).limit(1);
  } catch (e) {
    // If anything fails at build/runtime, return 404 rather than throwing during "collect page data"
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!link || !link.isActive) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Best-effort click log (don’t await)
  try {
    const ua = req.headers.get("user-agent");
    const referrer = req.headers.get("referer");
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const country = req.headers.get("x-vercel-ip-country") || "";
    const region = req.headers.get("x-vercel-ip-country-region") || "";
    const city = req.headers.get("x-vercel-ip-city") || "";

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

    void fetch(new URL("/api/v1/ingest-click", req.url), {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": env.API_KEY },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  return NextResponse.redirect(link.url, 307); // 301 once stable
}
