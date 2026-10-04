import type { Metadata } from "next";
import type { CSSProperties } from "react";

const siteUrl = "https://dev-404.com";

export const metadata: Metadata = {
  title: "AURELIA - DEV Studios Artist File",
  description:
    "Meet AURELIA, a creative spirit, full stack developer, music lover, poet, and storyteller bringing a different perspective to DEV Studios.",
  alternates: {
    canonical: "/aurelia",
  },
  openGraph: {
    title: "AURELIA - DEV Studios Artist File",
    description:
      "AURELIA brings music, poetry, code, and storytelling into the DEV Studios universe.",
    url: `${siteUrl}/aurelia`,
    images: [
      {
        url: "/dev404/aurelia-place-between.png",
        width: 1200,
        height: 630,
        alt: "AURELIA - The Place Between",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURELIA - DEV Studios",
    description: "Music, poetry, code, and storytelling from AURELIA.",
    images: ["/dev404/aurelia-place-between.png"],
  },
};

const aureliaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/aurelia#artist`,
  name: "AURELIA",
  url: `${siteUrl}/aurelia`,
  image: `${siteUrl}/dev404/aurelia-profile.png`,
  description:
    "AURELIA is a full stack developer, music lover, poet, and storyteller bringing a different creative perspective to DEV Studios.",
  memberOf: {
    "@type": "Organization",
    name: "DEV Studios",
    url: `${siteUrl}/studios`,
  },
  knowsAbout: ["Music", "Poetry", "Storytelling", "Full stack development", "Digital art"],
};

export default function AureliaPage() {
  return (
    <main
      className="ref-page aurelia-page"
      style={{ "--page-bg": "url('/dev404/aurelia-place-between.png')" } as CSSProperties}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aureliaJsonLd) }}
      />

      <section className="aurelia-stage" aria-labelledby="aurelia-title">
        <div className="aurelia-identity">
          <img className="aurelia-logo" src="/dev404/aurelia-logo.png" alt="AURELIA" />
          <p className="ref-kicker">Artist file / DEV Studios</p>
          <h1 id="aurelia-title">The Place Between</h1>
          <p>
            AURELIA is a super creative spirit with a love for music, poetry, and storytelling.
            She moves through art like a builder of worlds, shaping feeling into sound, words,
            images, and code.
          </p>
          <p>
            As a full stack developer, she brings the logic of software together with the emotion
            of music and the rhythm of story. Her perspective gives DEV Studios a new frequency:
            bright, strange, thoughtful, and alive with imagination.
          </p>
          <div className="aurelia-tags" aria-label="AURELIA creative lanes">
            <span>Music</span>
            <span>Poetry</span>
            <span>Story</span>
            <span>Full Stack Dev</span>
          </div>
        </div>

        <figure className="aurelia-profile-card">
          <img src="/dev404/aurelia-profile.png" alt="AURELIA profile portrait" />
          <figcaption>
            <span>Creative signal</span>
            <b>AURELIA</b>
          </figcaption>
        </figure>
      </section>

      <section className="aurelia-feature" aria-label="Featured AURELIA video">
        <div className="aurelia-video-shell">
          <img src="/dev404/aurelia-place-between.png" alt="AURELIA The Place Between featured artwork" />
        </div>
        <div className="aurelia-feature-copy">
          <p className="ref-kicker">Featured video</p>
          <h2>AURELIA - The Place Between</h2>
          <p>
            A new doorway in the DEV Studios archive, built from purple light, digital dream logic,
            and the pull between code, memory, and imagination.
          </p>
          <a href="/videos">Open the video archive</a>
        </div>
      </section>
    </main>
  );
}
