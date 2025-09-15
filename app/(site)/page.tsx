// app/page.tsx
export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "48px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>agkb — URL Shortener</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        This is the API front for your short links. Use the API to create links and open
        <code style={{ marginLeft: 6, padding: "2px 6px", background: "#f4f4f5", borderRadius: 6 }}>
          https://agkb.in/&lt;code&gt;
        </code>{" "}
        to redirect.
      </p>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>API Quick Start</h2>
        <pre style={{ whiteSpace: "pre-wrap", background: "#0b1020", color: "#e6edf3", padding: 12, borderRadius: 8 }}>
{`POST https://agkb.in/api/v1/shorten
headers:
  content-type: application/json
  x-api-key: <YOUR_API_KEY>
body:
  { "url": "https://example.com", "alias": "hello" }

→ creates https://agkb.in/hello`}
        </pre>
      </div>
    </main>
  );
}
