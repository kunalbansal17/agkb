// app/[code]/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: { code: string } }
) {
  try {
    const code = params.code;

    const [row] = await db
      .select()
      .from(links)
      .where(eq(links.code, code))
      .limit(1);

    if (!row) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // increment click count
    await db.execute(sql`
      UPDATE ${links}
      SET clicks = clicks + 1
      WHERE code = ${code}
    `);

    return NextResponse.redirect(row.url, 302); // standard redirect
  } catch (e: any) {
    console.error("redirect error", e);
    return NextResponse.json(
      { error: "Server error", detail: String(e) },
      { status: 500 }
    );
  }
}
