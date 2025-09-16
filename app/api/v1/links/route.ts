import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links } from "@/lib/schema";
import { desc, sql } from "drizzle-orm";
import { assertApiKey } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    assertApiKey(req);

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    // ✅ Fetch rows with pagination
    const rows = await db
      .select()
      .from(links)
      .orderBy(desc(links.createdAt))
      .limit(pageSize)
      .offset(offset);

    // ✅ Get total count properly
    const result = await db.execute<{ count: string }>(
      sql`SELECT COUNT(*)::text as count FROM ${links}`
    );

    const countStr = result.rows[0]?.count ?? "0";
    const total = parseInt(countStr, 10) || 0;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    return NextResponse.json({
      ok: true,
      page,
      totalPages,
      rows,
    });
  } catch (err: unknown) {
    console.error("links API error", err);
    return NextResponse.json(
      { ok: false, error: "DB failure", detail: String(err) },
      { status: 500 }
    );
  }
}
