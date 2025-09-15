import { NextResponse } from "next/server";
import QRCode from "qrcode";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const widthParam = searchParams.get("w");
  const download = searchParams.get("download") === "1";

  if (!text) return NextResponse.json({ error: "Missing text" }, { status: 400 });

  try {
    const u = new URL(text);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const width = Math.min(Math.max(Number(widthParam || 512), 128), 1024);

  const bytes = await QRCode.toBuffer(text, { width, margin: 1, errorCorrectionLevel: "M" });
  const ab = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(ab).set(bytes as Uint8Array);

  const headers = new Headers({
    "Content-Type": "image/png",
    "Cache-Control": "public, max-age=31536000, immutable",
  });
  if (download) {
    const fileSafe = text.replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 40) || "qr";
    headers.set("Content-Disposition", `attachment; filename="${fileSafe}.png"`);
  }

  return new Response(ab, { headers });
}
