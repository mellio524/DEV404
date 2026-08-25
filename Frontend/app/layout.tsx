import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DreamShell } from "./components/DreamShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-404.com"),
  applicationName: "DEV 404",
  title: {
    default: "DEV 404 - Official Music Artist, Albums, Videos, and Visual Universe",
    template: "%s | DEV 404",
  },
  description:
    "The official DEV 404 site for music, albums, videos, artist story, and a trippy tech-thriller visual universe built from dreams, memory, and signal-fractured sound.",
  keywords: [
    "DEV 404",
    "DEV Music 404",
    "DEV 404 music",
    "DEV 404 official",
    "DEV 404 albums",
    "DEV 404 videos",
    "Lucid Dreams",
    "Gate Keepers",
    "independent music artist",
    "experimental music",
    "visual artist",
  ],
  authors: [{ name: "DEV 404", url: "https://dev-404.com" }],
  creator: "DEV 404",
  publisher: "DEV 404",
  category: "Music",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "DEV 404 - Official Music Artist, Albums, Videos, and Visual Universe",
    description:
      "Enter the official DEV 404 universe: music, albums, videos, dreams, memory, technology, and signal-fractured visual art.",
    url: "https://dev-404.com",
    siteName: "DEV 404",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DEV 404 official music and video universe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV 404 - Official Music Artist, Albums, Videos, and Visual Universe",
    description:
      "Official DEV 404 music releases, videos, artist story, and signal-fractured visual art.",
    images: ["/og.png"],
    creator: "@dev_40435715",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DreamShell>{children}</DreamShell>
      </body>
    </html>
  );
}
