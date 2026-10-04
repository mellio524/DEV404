import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { PageLoopVideo } from "../components/PageLoopVideo";
import { sourceLinks } from "../data";

export const metadata: Metadata = {
  title: "DEVPOOL - DEV 404",
  description:
    "DEVPOOL is the playful red-black chaos wing of DEV 404, featuring the official DEVPOOL video, album, stickers, and hero-glitch comic energy.",
  alternates: {
    canonical: "/devpool",
  },
  openGraph: {
    title: "DEVPOOL - DEV 404",
    description:
      "Enter DEVPOOL: official video, album, stickers, and red-black hero glitch chaos from DEV 404.",
    url: "https://dev-404.com/devpool",
    images: [
      {
        url: "/dev404/devpool-background.png",
        width: 1920,
        height: 1080,
        alt: "DEVPOOL red and black hero chaos scene",
      },
    ],
  },
};

const stickers = [
  { label: "You again?", x: "0%", y: "0%" },
  { label: "Hero loading", x: "50%", y: "0%" },
  { label: "Nice wall", x: "100%", y: "0%" },
  { label: "Totally candid", x: "0%", y: "33.333%" },
  { label: "The script did it", x: "50%", y: "33.333%" },
  { label: "DEVPOOL", x: "100%", y: "33.333%" },
  { label: "You again? duplicate", x: "0%", y: "66.666%" },
  { label: "Hero loading duplicate", x: "50%", y: "66.666%" },
  { label: "Nice wall duplicate", x: "100%", y: "66.666%" },
  { label: "Totally candid duplicate", x: "0%", y: "100%" },
  { label: "The script did it duplicate", x: "50%", y: "100%" },
  { label: "DEVPOOL duplicate", x: "100%", y: "100%" },
];

const devpoolEpisodes = [
  {
    number: "02",
    title: "DEVPOOL Episode 2",
    id: "n2XY4DputvU",
    href: sourceLinks.devpoolEpisode2,
  },
  {
    number: "03",
    title: "DEVPOOL Episode 3",
    id: "j-IHuASxKS4",
    href: sourceLinks.devpoolEpisode3,
  },
  {
    number: "04",
    title: "DEVPOOL: No Refunds",
    id: "AkH11AdWw1o",
    href: sourceLinks.devpoolEpisode4,
  },
  {
    number: "05",
    title: "DEVPOOL: Run It Local",
    id: "mUoWE-sbFgc",
    href: sourceLinks.devpoolEpisode5,
  },
  {
    number: "06",
    title: "DEVPOOL: The Puppet Master",
    id: "uyKSeeh2lZU",
    href: sourceLinks.devpoolEpisode6,
  },
  {
    number: "07",
    title: "DEVPOOL: Resonance",
    id: "Vg8Pa9TByH8",
    href: sourceLinks.devpoolEpisode7,
  },
];

export default function DevpoolPage() {
  return (
    <main
      className="ref-page devpool-page"
      style={{ "--page-bg": "url('/dev404/devpool-background.png')" } as CSSProperties}
    >
      <PageLoopVideo poster="/dev404/devpool-background.png" src="/dev404/devpool-loop.mp4" />
      <section className="devpool-hero">
        <div className="devpool-copy">
          <p className="ref-kicker">Hero loading... probably.</p>
          <h1>DEVPOOL</h1>
          <p>
            Good code survives anything. DEVPOOL is the loud, sarcastic side-door into the DEV 404 universe:
            comic-book chaos, red eyes, broken city alarms, and a hero who knows the script is already acting weird.
          </p>
          <div className="devpool-actions">
            <a href={sourceLinks.devpoolVideo} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
            <a href={sourceLinks.devpoolAlbum} target="_blank" rel="noreferrer">
              Play the album
            </a>
          </div>
        </div>

        <div className="devpool-player" aria-label="DEVPOOL video and album player">
          <div className="devpool-screen">
            <iframe
              title="DEVPOOL official video"
              src="https://www.youtube.com/embed/QaKdzmtIwz0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="devpool-album">
            <span>Album signal</span>
            <iframe
              title="DEVPOOL album"
              src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_mfrNbtqU2W6_NIsLHS2WLuPh16uB0oZxM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="devpool-episode-vault" aria-label="DEVPOOL episode vault">
        <div className="devpool-vault-head">
          <p className="ref-kicker">New dispatches</p>
          <h2>Episode Vault</h2>
        </div>
        <div className="devpool-episode-grid">
          {devpoolEpisodes.map((episode) => (
            <article className="devpool-episode-card" key={episode.id}>
              <div className="devpool-episode-screen">
                <iframe
                  title={episode.title}
                  src={`https://www.youtube.com/embed/${episode.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="devpool-episode-copy">
                <span>Episode {episode.number}</span>
                <h3>{episode.title}</h3>
                <a href={episode.href} target="_blank" rel="noreferrer">
                  Open signal
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="devpool-sticker-wall" aria-label="DEVPOOL sticker wall">
        {stickers.map((sticker, index) => (
          <article
            aria-label={sticker.label}
            className="devpool-sticker"
            key={sticker.label}
            style={
              {
                "--sx": sticker.x,
                "--sy": sticker.y,
                "--spin": `${index % 2 === 0 ? -1 : 1}`,
              } as CSSProperties
            }
          />
        ))}
      </section>
    </main>
  );
}
