import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <html lang="en">
      <head>
        <title>agkb.in — Shorten Links, Generate QR</title>
        <meta name="description" content="Create short links with QR codes at agkb.in. Fast, minimal, and free." />

        {/* Open Graph tags */}
        <meta property="og:title" content="agkb.in — Shorten Links, Generate QR" />
        <meta property="og:description" content="Create short links with QR codes at agkb.in. Fast, minimal, and free." />
        <meta property="og:url" content="https://agkb.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://agkb.in/og-image.png" />
 </head>
      <body>{children}</body>
    </html>


  );
}
