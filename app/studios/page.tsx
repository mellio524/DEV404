import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { sourceLinks } from "../data";

export const metadata: Metadata = {
  title: "DEV Studios - TETHERED",
  description:
    "DEV Studios is the film and trailer hub for DEV 404, featuring TETHERED, an upcoming November movie with trailer, poster, and original motion picture soundtrack.",
  alternates: {
    canonical: "/studios",
  },
  openGraph: {
    title: "DEV Studios - TETHERED",
    description:
      "Watch the TETHERED trailer, view the poster, and enter the soundtrack theatre from DEV Studios.",
    url: "https://dev-404.com/studios",
    images: [
      {
        url: "/dev404/tethered-poster.png",
        width: 1920,
        height: 1080,
        alt: "TETHERED official motion picture poster",
      },
    ],
  },
};

export default function StudiosPage() {
  return (
    <main
      className="ref-page studios-page"
      style={{ "--page-bg": "url('/dev404/tethered-poster.png')" } as CSSProperties}
    >
      <section className="studio-theatre">
        <div className="studio-marquee">
          <p className="ref-kicker">DEV Studios presents</p>
          <h1>TETHERED</h1>
          <span>Official motion picture coming in November</span>
        </div>

        <div className="studio-screen">
          <iframe
            title="Tethered official movie trailer"
            src="https://www.youtube.com/embed/nMTaEeW0few"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <aside className="studio-poster-card">
          <img src="/dev404/tethered-poster.png" alt="TETHERED official poster" />
          <a href={sourceLinks.tetheredTrailer} target="_blank" rel="noreferrer">
            Watch trailer
          </a>
        </aside>

        <section className="studio-info">
          <h2>The film signal</h2>
          <p>
            TETHERED follows a bond stretched across time, memory, and the impossible space between two lives.
            Golden clockwork, broken timelines, and a world split between shadow and light pull the story into a
            cinematic DEV 404 universe where connection becomes the only way through.
          </p>
          <div className="studio-facts">
            <span>Genre: dream thriller</span>
            <span>Status: coming November</span>
            <span>World: DEV Studios</span>
          </div>
        </section>

        <section className="studio-soundtrack">
          <img src="/dev404/tethered-soundtrack.png" alt="TETHERED original soundtrack cover" />
          <div>
            <span>Soundtrack</span>
            <h2>Original Motion Picture Soundtrack</h2>
            <p>
              The TETHERED soundtrack carries the clockwork emotion of the film: gold light, dark streets, memory,
              distance, and the pulse of something still connected.
            </p>
            <a href={sourceLinks.tetheredSoundtrack} target="_blank" rel="noreferrer">
              Open soundtrack
            </a>
          </div>
          <div className="studio-soundtrack-player">
            <iframe
              title="TETHERED original motion picture soundtrack"
              src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_kWC7LXZSiiovtix3XYkEI8RMldVKVp2Cs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </section>
    </main>
  );
}
