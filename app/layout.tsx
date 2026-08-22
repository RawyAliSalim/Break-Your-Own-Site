import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rawysalim.dev"),
  title: "Rawy Ali Salim | Full-Stack & Backend Developer",
  description:
    "Portfolio of Rawy Ali Salim - Full-Stack & Backend Developer specializing in Node.js, Express, SQL, MERN, and AI integrations. Head of Software Community at BYTE Club.",
  keywords: [
    "Rawy Ali Salim",
    "Full-Stack Developer",
    "Backend Developer",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "SQL",
    "MERN",
    "BYTE Club",
  ],
  authors: [{ name: "Rawy Ali Salim" }],
  creator: "Rawy Ali Salim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rawysalim.dev",
    title: "Rawy Ali Salim | Full-Stack & Backend Developer",
    description:
      "Full-Stack & Backend Developer focused on scalable systems, robust APIs, AI solutions, and leading the developer community at BYTE Club.",
    siteName: "Rawy Ali Salim Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rawy Ali Salim - Full-Stack & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawy Ali Salim | Full-Stack & Backend Developer",
    description:
      "Backend & Full-Stack Developer specializing in Node.js, Express, SQL, and MERN. Head of Software Community at BYTE Club.",
    creator: "@rawysalim",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Placeholder: Free Cloudflare Web Analytics */}
        {/* Replace 'YOUR_CLOUDFLARE_TOKEN' with your actual Cloudflare Web Analytics beacon token */}
        {/* 
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_CLOUDFLARE_TOKEN"}'
          strategy="afterInteractive"
        />
        */}
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
