// app/(site)/page.tsx
"use client";

import { useEffect, useState } from "react";

type LinkRow = { code: string; url: string; createdAt: number; clicks: number };

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState(false);
  const [created, setCreated] = useState<string | null>(null);
const [createdLongUrl, setCreatedLongUrl] = useState<string | null>(null); // new

  const [links, setLinks] = useState<LinkRow[]>([]);
  const [origin, setOrigin] = useState<string>("");

function looksLikeUrl(str: string) {
  return /^[\w.-]+\.[a-z]{2,}$/i.test(str); // quick check: has a dot + TLD
}



  useEffect(() => {
    setOrigin(typeof window !== "undefined" ? window.location.origin : "");
    void refresh();
  }, []);

  async function refresh() {
    try {
      const r = await fetch("/api/v1/links", {
        headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "" },
      });
      if (r.ok) {
        const j = (await r.json()) as { links?: LinkRow[] };
        setLinks(j.links || []);
      }
    } catch (err) {
      console.error("refresh failed", err);
    }
  }

  async function onShorten(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return alert("Enter a URL");
if (!looksLikeUrl(url)) {
  return alert("Please enter a valid URL");
  ;
}

    // validation: add https:// if missing
    let normalized = url.trim();
    if (!/^https?:\/\//i.test(normalized)) {
      normalized = "https://" + normalized;
    }

    setBusy(true);
    setCreated(null);
    try {
      const r = await fetch("/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
        },
        body: JSON.stringify({ url: normalized, alias: custom }),
      });
      const j = (await r.json()) as { code?: string; error?: string };
      if (!r.ok) throw new Error(j.error || "Failed");
      setCreated(j.code ?? null);
      setCreatedLongUrl(url);   // preserve original URL
      setUrl("");
      setCustom("");
      void refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      alert(msg);
    } finally {
      setBusy(false);
    }


  }

  const shortUrl = created && origin ? `${origin}/${created}` : "";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Shorten Links • Generate QR
        </h1>
        <p className="mt-2 text-gray-600">
          Paste a long URL, optionally add a custom alias, and get a short link
          with QR code.
        </p>

        {/* Shorten form */}
        <section className="mt-8 rounded-2xl border border-gray-200 p-5 shadow-sm">
          <form onSubmit={onShorten} className="space-y-4">
            <label className="block text-sm font-medium">Enter your URL</label>
            <input
              type="text"
              required
              placeholder="example.com or https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none hover:bg-gray-50"
            />

            <details className="rounded-lg bg-gray-50 p-3">
              <summary className="cursor-pointer text-sm font-medium">
                Advanced (Custom Alias)
              </summary>
              <div className="mt-3 space-y-1">
                <label className="block text-sm font-medium">
                  Custom alias (optional)
                </label>
                <input
                  type="text"
                  placeholder="myalias"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none hover:bg-gray-50"
                />
                <p className="text-xs text-gray-500">
                  Your short link will look like{" "}
                  <span className="font-mono">
                    {origin || "https://agkb.in"}/myalias
                  </span>
                </p>
              </div>
            </details>

            <button
              disabled={busy}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer disabled:opacity-60"
            >
              {busy ? "Creating…" : "Shorten URL"}
            </button>
          </form>

          {/* Result */}
          {created && (
          <div className="mt-6 rounded-xl bg-gray-50 p-4">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-sm text-gray-500">Your short link</div>
        <div className="font-mono text-lg">{shortUrl}</div>
        {/* Long URL preview */}
        {createdLongUrl && (
          <div className="mt-1 text-sm text-gray-500 break-all">
            <span className="text-gray-500">→</span> {createdLongUrl}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() =>
            shortUrl && navigator.clipboard.writeText(shortUrl)
          }
          className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 cursor-pointer"
        >
          Copy
        </button>
        <a
          href={shortUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-gray-800 cursor-pointer"
        >
          Open
        </a>
      </div>
    </div>
              {/* QR Code section */}
              {shortUrl && (
                <div className="mt-4 grid gap-3 sm:grid-cols-[auto,1fr] sm:items-start">
                  <div className="rounded-xl border border-gray-200 p-3 bg-white flex justify-center">
                    <img
                      src={`/api/v1/qrcode?text=${encodeURIComponent(
                        shortUrl
                      )}&w=200`}
                      alt="QR code for short URL"
                      width={200}
                      height={200}
                      className="block"
                    />
                  </div>
                  <div className="text-sm text-gray-600 sm:mt-0 mt-2">
                    <div className="font-medium text-gray-800 mb-2">
                      QR code for this link
                    </div>
                    <p className="mb-3">
                      Scan to open the short URL. Download PNG for sharing.
                    </p>
                    <a
                      className="rounded-lg border border-gray-300 px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                      href={`/api/v1/qrcode?text=${encodeURIComponent(
                        shortUrl
                      )}&w=512&download=1`}
                      download={`qr-${created}.png`}
                    >
                      Download PNG
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Recent links */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Recent links</h2>
          <div className="mt-4 grid gap-3">
            {links.length === 0 && (
              <p className="text-sm text-gray-500">
                No links yet. Create one above to see it here.
              </p>
            )}
            {links.map((l) => (
              <div
                key={l.code}
                className="rounded-xl border border-gray-200 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Short</div>
                    <a
                      className="font-mono text-lg text-gray-900 hover:underline"
                      href={`/${l.code}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {origin || "https://agkb.in"}/{l.code}
                    </a>
                    <div className="mt-1 text-sm text-gray-500 break-all">
                      <span className="text-gray-500">→</span> {l.url}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold">{l.clicks}</div>
                    <div className="text-xs text-gray-500">clicks</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
