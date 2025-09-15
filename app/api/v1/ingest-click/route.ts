import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links, clicks } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { env } from "@/lib/env";

type Ingest = {
  code: string;
  referrer?: string | null;
  ua?: string | null;
  ipHash?: string | null;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  deviceType?: string | null;
  bot?: boolean | null;
};

export async function POST(req: Request) {
  if (req.headers.get("x-api-key") !== env.API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await req.json().catch(() => ({}))) as Ingest;
  if (!payload.code) return NextResponse.json({ error: "Missing code" }, { status: 400 });

  const [link] = await db.select().from(links).where(eq(links.code, payload.code)).limit(1);
  if (!link) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db.insert(clicks).values({
    linkId: link.id,
    referrer: payload.referrer || null,
    ua: payload.ua || null,
    ipHash: payload.ipHash || null,
    country: payload.country || null,
    region: payload.region || null,
    city: payload.city || null,
    deviceType: payload.deviceType || null,
    bot: !!payload.bot,
  });

  return NextResponse.json({ ok: true });
}
