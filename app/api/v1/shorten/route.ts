import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { env } from "@/lib/env";
import { normalizeUrl, isValidAbsoluteHttpUrl, isValidAlias, RESERVED } from "@/lib/validate";

function authOk(req: Request): boolean {
  return req.headers.get("x-api-key") === env.API_KEY;
}

export async function POST(req: Request) {
  if (!authOk(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as { url?: string; alias?: string };
  const normalized = normalizeUrl(body.url || "");
  const alias = (body.alias || "").trim();

  if (!isValidAbsoluteHttpUrl(normalized)) {
    return NextResponse.json({ error: "INVALID_URL" }, { status: 400 });
  }
  if (alias) {
    if (!isValidAlias(alias) || RESERVED.has(alias)) {
      return NextResponse.json({ error: "INVALID_ALIAS" }, { status: 400 });
    }
    const existing = await db.select({ id: links.id }).from(links).where(eq(links.code, alias)).limit(1);
    if (existing.length) return NextResponse.json({ error: "ALIAS_TAKEN" }, { status: 409 });
  }

  const code = alias || genCode(6);
  await db.insert(links).values({ code, url: normalized }).onConflictDoNothing();

  const shortUrl = `${new URL(req.url).origin}/${code}`;
  return NextResponse.json({ code, shortUrl }, { status: 201 });
}

function genCode(len = 6) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}
