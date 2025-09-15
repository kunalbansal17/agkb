// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "agkb — URL Shortener",
  description: "Minimal short links, QR, and analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {children}
      </body>
    </html>
  );
}
