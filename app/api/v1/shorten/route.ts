import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { assertApiKey } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    assertApiKey(req);
    const body = await req.json();
    const { url, alias } = body as { url?: string; alias?: string };

    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    const code = alias?.trim() || Math.random().toString(36).slice(2, 8);

    // check if alias exists
    const existing = await db.select().from(links).where(eq(links.code, code));
    if (existing.length > 0) {
      return NextResponse.json({ error: "Alias already exists" }, { status: 409 });
    }

    await db.insert(links).values({ code, url });

    return NextResponse.json({ code }, { status: 201 });
} catch (e: unknown) {
  const message = e instanceof Error ? e.message : String(e);
  console.error("shorten error:", e);
  return NextResponse.json(
    { error: "DB failure", detail: message },
    { status: 500 }
  );
}

}
