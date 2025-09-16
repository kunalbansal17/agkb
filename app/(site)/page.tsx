"use client";

import { useEffect, useState } from "react";

type LinkRow = {
  code: string;
  url: string;
  createdAt: number;
  clicks: number;
};



function normalizeUrl(str: string): string | null {
  let s = str.trim();

  // if missing scheme, add https://
  if (!/^https?:\/\//i.test(s)) {
    s = "https://" + s;
  }

  try {
    const u = new URL(s);

    // Extra validation:
    // 1. Must have a hostname with at least one dot (so "google" fails)
    // 2. No spaces inside the hostname
    if (!u.hostname.includes(".") || /\s/.test(u.hostname)) {
      return null;
    }

    return u.toString();
  } catch {
    return null;
  }
}



export default function HomePage() {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState(false);

  const [created, setCreated] = useState<string | null>(null);
  const [createdLongUrl, setCreatedLongUrl] = useState<string | null>(null);

  const [links, setLinks] = useState<LinkRow[]>([]);
  const [origin, setOrigin] = useState("");

   // 👇 ADD pagination state here inside component
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setOrigin(typeof window !== "undefined" ? window.location.origin : "");
    void refresh();
  }, []);

  async function refresh(page = 1) {
  try {
    const r = await fetch(`/api/v1/links?page=${page}`, {
      headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "" },
    });
    if (r.ok) {
      const j = (await r.json()) as {
        ok: boolean;
        rows?: LinkRow[];
        totalPages?: number;
        page?: number;
      };
      setLinks(j.rows || []);            // ✅ correct field
      setTotalPages(j.totalPages || 1);  // ✅ set pagination
      setPage(j.page || 1);              // ✅ update current page
    }
  } catch (err) {
    console.error("refresh failed", err);
  }
}





  async function onShorten(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return alert("Enter a URL");

    const normalized = normalizeUrl(url);
    if (!normalized) return alert("Please enter a valid URL");

    setBusy(true);
    setCreated(null);
    setCreatedLongUrl(null);

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
      setCreatedLongUrl(normalized);

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

        {/* Form */}
        <section className="mt-8 rounded-2xl border border-gray-200 p-5 shadow-sm">
          <form onSubmit={onShorten} className="space-y-4">
            <label className="block text-sm font-medium">Enter your URL</label>
            <input
              type="text"
              required
              placeholder="example.com or https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 
                         focus:border-gray-500 focus:outline-none hover:bg-gray-50"
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 
                             focus:border-gray-500 focus:outline-none hover:bg-gray-50"
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
              className="inline-flex w-full items-center justify-center rounded-xl 
                         bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-gray-500 
                         cursor-pointer disabled:opacity-60"
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

                  {createdLongUrl && (
                    <div className="mt-1 text-sm text-gray-500 break-all">
                      <span className="text-gray-500">→</span> {createdLongUrl}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => shortUrl && navigator.clipboard.writeText(shortUrl)}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm 
                               hover:bg-gray-100 cursor-pointer"
                  >
                    Copy
                  </button>
                  <a
                    href={shortUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white 
                               hover:bg-gray-800 cursor-pointer"
                  >
                    Open
                  </a>
                  <button
  onClick={() => {
    if (navigator.share) {
      navigator.share({ title: "Short link", url: shortUrl });
    } else {
      navigator.clipboard.writeText(shortUrl);
      alert("Link copied to clipboard");
    }
  }}
  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 cursor-pointer"
>
  Share
</button>

                </div>
              </div>

              {shortUrl && (
                <div className="mt-4 grid gap-3 sm:grid-cols-[auto,1fr] sm:items-start">
                  <div className="rounded-xl border border-gray-200 p-3 bg-white flex justify-center">
                    <img
                      src={`/api/v1/qrcode?text=${encodeURIComponent(shortUrl)}&w=200`}
                      alt="QR code"
                      width={200}
                      height={200}
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
                      className="rounded-lg border border-gray-300 px-3 py-1.5 
                                 hover:bg-gray-100 cursor-pointer"
                      href={`/api/v1/qrcode?text=${encodeURIComponent(shortUrl)}&w=512&download=1`}
                      download={`qr-${created ?? "link"}.png`}
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
       {/* Notice */}


{/* Recent links table */}
<section className="mt-8">
  <h2 className="text-lg font-semibold mb-3">Recent Links</h2>
  <p className="mt-6 text-xs text-gray-500">
  Note: All links created on <span className="font-medium">agkb.in</span> are public and can be shared by anyone.
</p>

  {links.length === 0 ? (
    <p className="text-sm text-gray-500">No links yet.</p>
  ) : (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-600">
          <tr>
            <th className="p-2">Long URL</th>
            <th className="p-2">Short URL</th>
            <th className="p-2">Created</th>
            <th className="p-2 text-right">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {links.map((l) => (
            <tr key={l.code} className="border-t">
              
             <td
  className="p-2 truncate max-w-xs"
  title={l.url} // ✅ shows full URL on hover
>
  {l.url}
</td>
              <td className="p-2">
                <a
                  href={`/${l.code}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {origin}/{l.code}
                </a>
              </td>
              <td className="p-2 text-gray-500">
                {new Date(l.createdAt).toLocaleDateString()}
              </td>
              <td className="p-2 text-right font-medium">{l.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}

  {/* Pagination placeholder */}
{/* Pagination controls */}
{totalPages > 1 && (
  <div className="mt-6 flex items-center justify-center gap-2">
    {/* Newer button */}
    <button
      onClick={() => setPage((p: number) => Math.max(1, p - 1))}
      disabled={page === 1}
      className="px-3 py-1.5 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
    >
      Newer
    </button>

    {/* Numbered pages with shifting window */}
    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .slice(
        Math.max(0, page - 3), // show 2 pages before current
        Math.min(totalPages, page + 2) // show 2 pages after current
      )
      .map((num) => (
    <button
  key={num}
  onClick={() => {
    setPage(num);     // ✅ update state
    refresh(num);     // ✅ fetch rows for that page
  }}
  className={`px-3 py-1.5 rounded border text-sm ${
    page === num
      ? "bg-gray-900 text-white border-gray-900"
      : "border-gray-300 hover:bg-gray-100"
  }`}
>
  {num}
</button>

      ))}

    {/* Older button */}
    <button
      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
      disabled={page === totalPages}
      className="px-3 py-1.5 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
    >
      Older
    </button>
  </div>
)}

</section>

      </main>
    </div>
  );
}
