import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { links, clicks } from "@/lib/schema";
import { desc, sql } from "drizzle-orm";
import { env } from "@/lib/env";

export async function GET(req: Request) {
  if (req.headers.get("x-api-key") !== env.API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const limit = Math.min(Number(searchParams.get("limit") || "20"), 100);

  const data = await db
    .select({
      code: links.code,
      url: links.url,
      createdAt: links.createdAt,
      clicks: sql<number>`(select count(1) from ${clicks} c where c.link_id = ${links.id} and c.bot = false)`,
    })
    .from(links)
    .orderBy(desc(links.createdAt))
    .limit(limit);

  return NextResponse.json({ links: data });
}
