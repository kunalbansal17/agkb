import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";

export async function GET() {
  try {
    // Try a trivial query
    const result = await db.select().from(links).limit(1);
    return NextResponse.json({ ok: true, rows: result });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message, detail: err.stack },
      { status: 500 }
    );
  }
}
//how are you?
