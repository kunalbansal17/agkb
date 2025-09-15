import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    DATABASE_URL: process.env.DATABASE_URL ? "✅ loaded" : "❌ missing",
    API_KEY: process.env.API_KEY ? "✅ loaded" : "❌ missing",
  });
}
