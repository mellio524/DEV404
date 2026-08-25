import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { HomeRecommendations } from "./components/HomeRecommendations";
import { PageLoopVideo } from "./components/PageLoopVideo";

const siteUrl = "https://dev-404.com";

export const metadata: Metadata = {
  title: "DEV 404 Official Site - Music, Albums, Videos, Dreams, and Visual Art",
  description:
    "Official DEV 404 home page. Explore the music, albums, videos, dreams, memories, and tech-thriller visual world of DEV 404, including Lucid Dreams and Gate Keepers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DEV 404 Official Site - Music, Albums, Videos, Dreams, and Visual Art",
    description:
      "Explore the official DEV 404 universe: music, albums, videos, dreams, memory, technology, and visual storytelling.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DEV 404 official artist site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV 404 Official Site",
    description:
      "Official music, albums, videos, dreams, memory, and visual storytelling from DEV 404.",
    images: ["/og.png"],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "DEV 404",
      url: siteUrl,
      description:
        "The official DEV 404 website for music, albums, videos, artist story, and visual art.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#artist`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.youtube.com/@DEV_Music_404/search?query={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MusicGroup",
      "@id": `${siteUrl}/#artist`,
      name: "DEV 404",
      alternateName: ["DEV Music 404", "DEV_Music_404"],
      url: siteUrl,
      image: `${siteUrl}/og.png`,
      description:
        "DEV 404 is an independent music and visual artist using sound, video, technology, memory, dreams, and digital art to build a signal-fractured creative universe.",
      genre: ["Experimental music", "Alternative music", "Visual music", "Electronic music"],
      sameAs: [
        "https://www.youtube.com/@DEV_Music_404",
        "https://open.spotify.com/artist/7lvmTahHl3ViENKZrWjsG4",
        "https://www.facebook.com/profile.php?id=61578195951086",
        "https://x.com/dev_40435715",
      ],
      album: [
        {
          "@type": "MusicAlbum",
          name: "LUCID DREAMS",
          url: "https://www.youtube.com/playlist?list=OLAK5uy_noN2bhedpcNRpeYLL-mXgCZskcnUPxWlo",
        },
        {
          "@type": "MusicAlbum",
          name: "Gate Keepers",
          url: "https://www.youtube.com/playlist?list=OLAK5uy_miz4J2_gqMMhFXhapXzD3OHN1mEWd-WaY",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#home`,
      url: siteUrl,
      name: "DEV 404 Official Site",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#artist`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og.png`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <main
      className="ref-page ref-home"
      style={{ "--page-bg": "url('/dev404/bg-home-fit.png')" } as CSSProperties}
    >
      <PageLoopVideo poster="/dev404/bg-home-fit.png" src="/dev404/home-loop-2.mp4" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="cinema-copy home-copy">
        <p className="ref-kicker">The dream is real.</p>
        <h1 className="static-title" data-text="DEV 404">DEV 404</h1>
        <div className="home-intro">
          <p>I explore the space between what’s real and what lives behind my eyes.</p>
          <p>
            DEV 404 is where my music, my dreams, and my memories collide. Every song is a signal built from the
            things I survived, the moments that shaped me, and the future I’m still trying to reach. I use sound and
            visuals to turn those pieces into something you can feel.
          </p>
          <p>
            There’s a code in everything: the past, the pain, the patterns, the dreams that keep repeating. I follow
            that logic through every verse, every image, and every broken loop until the story starts to reveal itself.
          </p>
          <p>This isn’t just music. It’s my reality translated.</p>
        </div>
        <a className="redline-button" href="/music">Enter the loop</a>
      </section>
      <HomeRecommendations />
    </main>
  );
}
