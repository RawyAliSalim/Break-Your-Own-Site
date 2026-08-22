import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rawysalim.vercel.app"),
  title: {
    default: "Rawy Ali Salim | Full-Stack & Backend Developer",
    template: "%s | Rawy Ali Salim",
  },
  description:
    "Full-Stack Developer specializing in high-performance backend architecture (Node.js, Express, SQL) and modern web applications with AI integrations. Head of Software Community at BYTE Club.",
  keywords: [
    "Rawy Ali Salim",
    "Full-Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "MERN Stack",
    "Next.js",
    "SQL / PostgreSQL",
    "AI Integration",
    "Egypt Software Engineer",
    "Thndr",
    "talabat",
    "PwC",
  ],
  authors: [{ name: "Rawy Ali Salim", url: "https://github.com/RawyAliSalim" }],
  creator: "Rawy Ali Salim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rawysalim.vercel.app",
    siteName: "Rawy Ali Salim Portfolio",
    title: "Rawy Ali Salim | Full-Stack & Backend Developer",
    description:
      "Engineered for high performance and scale. Explore full-stack systems, backend architecture, and AI-integrated developer tooling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rawy Ali Salim - Full-Stack & Backend Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawy Ali Salim | Full-Stack & Backend Developer",
    description:
      "Full-Stack Developer specializing in scalable backend systems, Node.js, Next.js, SQL, and AI integrations.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        {/* Cloudflare Web Analytics */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a3df856be86745228213b7637e54cbfa"}'
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
