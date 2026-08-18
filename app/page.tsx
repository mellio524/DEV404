"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type Video = {
  title: string;
  id: string;
  zone: "Lucid" | "Bloodline" | "Signal" | "Archive";
  note: string;
};

type Album = {
  title: string;
  id: string;
  note: string;
  mood: string;
};

const lucidDreams: Video = {
  title: "LUCID DREAMS",
  id: "S-YtBZ19jqE",
  zone: "Lucid",
  note: "The doorway into the new DEV dream.",
};

const videos: Video[] = [
  lucidDreams,
  {
    title: "Blood Isn't BluePrint",
    id: "jdoeXD9jZ3g",
    zone: "Bloodline",
    note: "Family code, memory damage, and inheritance under glass.",
  },
  {
    title: "Never",
    id: "3BfuQUZDM3M",
    zone: "Bloodline",
    note: "A refusal loop disguised as a song.",
  },
  {
    title: "Family Portrait",
    id: "u6qUXsBzg0k",
    zone: "Bloodline",
    note: "A framed memory that keeps changing when you blink.",
  },
  {
    title: "The Mom I Never Had",
    id: "0cPTQbgy6yU",
    zone: "Bloodline",
    note: "A soft fracture in the archive.",
  },
  {
    title: "Episode 5 - The Story So Far",
    id: "SoCCRWBl6Js",
    zone: "Signal",
    note: "The dream catches itself narrating.",
  },
  {
    title: "Episode 4 - Break Out",
    id: "n0j12YqPvxY",
    zone: "Signal",
    note: "The room realizes it has no walls.",
  },
  {
    title: "Episode 3 - Eviction Notice",
    id: "7SiQGztEspo",
    zone: "Signal",
    note: "A notice slid under the door of reality.",
  },
  {
    title: "Episode 2 - Movies, Lies and War",
    id: "eKRg-2ryFc4",
    zone: "Signal",
    note: "Truth rendered in damaged frames.",
  },
  {
    title: "Episode 1 - Fractured Horizons",
    id: "ulKKG9ILqXE",
    zone: "Signal",
    note: "The first crack in the skyline.",
  },
  {
    title: "The Wheel",
    id: "iNjHqkeqPro",
    zone: "Archive",
    note: "A loop with a pulse.",
  },
  {
    title: "Redline Dreams",
    id: "myNbjVz5RbE",
    zone: "Archive",
    note: "Speed, sleep, and warning lights.",
  },
  {
    title: "Escape Not Found",
    id: "A9MC8J0WfRQ",
    zone: "Archive",
    note: "The exit route returns an error.",
  },
  {
    title: "Agent in the Middle",
    id: "zsuGLCKi56I",
    zone: "Archive",
    note: "DEV caught between transmissions.",
  },
  {
    title: "Break Out",
    id: "p3r8fQ7SkK0",
    zone: "Archive",
    note: "The lock starts hearing the song.",
  },
  {
    title: "Lucid Lies",
    id: "vXdr_pu9mg4",
    zone: "Lucid",
    note: "The dream edits itself mid-sentence.",
  },
  {
    title: "Pull The Plug",
    id: "6uOrPmM0gBg",
    zone: "Archive",
    note: "A hard reboot with teeth.",
  },
  {
    title: "Don't Blink",
    id: "9R3sYBrbsRY",
    zone: "Archive",
    note: "Every frame is a witness.",
  },
  {
    title: "Party Through Time",
    id: "c7kxOS2wh9Q",
    zone: "Archive",
    note: "Time stutters, then dances.",
  },
  {
    title: "Hello World",
    id: "00-_LcpNSWM",
    zone: "Archive",
    note: "The first boot screen of the DEV universe.",
  },
];

const albums: Album[] = [
  {
    title: "Mini Music Series",
    id: "PLMRGWgb7owuE",
    mood: "new signal",
    note: "Newest dream fragments and short-form transmissions.",
  },
  {
    title: "DEV 404: Error Sequence",
    id: "PLpbLxNqDQy7k8MD0jliGjvptF4cE7D80T",
    mood: "chapter run",
    note: "The episodic spine of the story.",
  },
  {
    title: "Full Music Videos",
    id: "PLpbLxNqDQy7k4s6eVrdJOe4snyqEfq-QS",
    mood: "visual vault",
    note: "Music videos gathered into one mirror.",
  },
  {
    title: "DEV 404 Shorts",
    id: "PLpbLxNqDQy7kPuQGFnqKfTnnjgiZ3vlVz",
    mood: "short bursts",
    note: "Fast cuts from the edge of the dream.",
  },
  {
    title: "Hello, World!",
    id: "OLAK5uy_na3MhE_Q3ushYs7n20lXVeBEf09pY69qo",
    mood: "origin",
    note: "The system wakes up and says DEV's name back.",
  },
  {
    title: "BROKEN",
    id: "OLAK5uy_nXeKfg375hfgChn3aMNG9Kd49g1U8YL0g",
    mood: "fracture",
    note: "A damaged album with light leaking through.",
  },
  {
    title: "Fractured Horizons",
    id: "OLAK5uy_mMAopvO3gpyJ5M143_JGK7WGzctI-vm2M",
    mood: "skyline split",
    note: "The place where the story starts tearing open.",
  },
  {
    title: "Movies Lies War",
    id: "OLAK5uy_lMK0hBiLJV0G1QpwIdeheOM78QL19TI4Y",
    mood: "propaganda dream",
    note: "The signal learns cinema, then weaponizes it.",
  },
  {
    title: "Eviction Notice",
    id: "OLAK5uy_lMLAx0P1MstSztk7LLSNmQCwphlUyN6R0",
    mood: "red paper",
    note: "Reality receives a warning it cannot ignore.",
  },
];

const rooms = [
  "Lucid gate",
  "Bloodline hallway",
  "Error sequence",
  "Video mirrors",
  "Album vault",
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<Video>(lucidDreams);
  const [activeAlbum, setActiveAlbum] = useState<Album>(albums[0]);
  const [filter, setFilter] = useState<Video["zone"] | "All">("All");

  const filteredVideos = useMemo(
    () => videos.filter((video) => filter === "All" || video.zone === filter),
    [filter],
  );

  return (
    <main className="dream-site">
      <div className="grain" aria-hidden="true" />
      <div className="aurora-field" aria-hidden="true" />
      <section className="dream-hero" id="top">
        <img
          className="hero-poster"
          src={`https://img.youtube.com/vi/${lucidDreams.id}/maxresdefault.jpg`}
          alt=""
        />
        <div className="hero-water" aria-hidden="true" />
        <nav className="dream-nav" aria-label="Primary">
          <a href="#videos">Videos</a>
          <a href="#albums">Albums</a>
          <a href="#story">Story</a>
          <a href="https://www.youtube.com/@DEV_Music_404">YouTube</a>
        </nav>
        <div className="hero-copy">
          <p className="signal-tag">DEV-404.com enters sleep mode</p>
          <h1>DEV 404</h1>
          <p className="hero-line">
            Step into the dream of DEV: a lucid, broken, beautiful system where
            music videos become rooms, albums become memories, and the signal
            keeps trying to rewrite the truth.
          </p>
          <div className="hero-actions">
            <a href="#videos">Watch the dream</a>
            <a href="#albums">Open the vault</a>
          </div>
        </div>
        <div className="floating-index" aria-label="Dream index">
          {rooms.map((room, index) => (
            <span key={room} style={{ "--delay": `${index * 0.35}s` } as CSSProperties}>
              {room}
            </span>
          ))}
        </div>
      </section>

      <section className="dream-room feature-room" id="videos">
        <div className="section-kicker">Current lucid feed</div>
        <div className="room-head">
          <h2>{activeVideo.title}</h2>
          <p>{activeVideo.note}</p>
        </div>
        <div className="viewer-grid">
          <div className="video-oracle">
            <iframe
              key={activeVideo.id}
              title={activeVideo.title}
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="dream-controls">
            <div className="filter-row" aria-label="Video filters">
              {(["All", "Lucid", "Bloodline", "Signal", "Archive"] as const).map(
                (zone) => (
                  <button
                    key={zone}
                    className={filter === zone ? "active" : ""}
                    onClick={() => setFilter(zone)}
                  >
                    {zone}
                  </button>
                ),
              )}
            </div>
            <div className="video-list">
              {filteredVideos.map((video, index) => (
                <button
                  className={video.id === activeVideo.id ? "active video-chip" : "video-chip"}
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                >
                  <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" />
                  <span>
                    <b>{String(index + 1).padStart(2, "0")} / {video.title}</b>
                    <small>{video.zone}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dream-room album-room" id="albums">
        <div className="section-kicker">Albums, series, vaults</div>
        <div className="room-head">
          <h2>{activeAlbum.title}</h2>
          <p>{activeAlbum.note}</p>
        </div>
        <div className="album-stage">
          <div className="playlist-shell">
            <iframe
              key={activeAlbum.id}
              title={activeAlbum.title}
              src={`https://www.youtube.com/embed/videoseries?list=${activeAlbum.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="album-constellation">
            {albums.map((album, index) => (
              <button
                key={album.id}
                className={album.id === activeAlbum.id ? "active album-node" : "album-node"}
                onClick={() => setActiveAlbum(album)}
                style={{ "--tilt": `${index % 2 === 0 ? -2 : 2}deg` } as CSSProperties}
              >
                <span>{album.mood}</span>
                <b>{album.title}</b>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="dream-room story-room" id="story">
        <div className="section-kicker">What this site becomes</div>
        <div className="story-grid">
          <div>
            <h2>No normal pages. Only rooms.</h2>
            <p>
              The rebuild keeps DEV as the center, but the navigation now feels
              like wandering through a music-video dream: distorted glass,
              impossible panels, moving light, embedded streams, and content
              grouped by emotional zone instead of ordinary categories.
            </p>
          </div>
          <div className="manifesto">
            <span>DEV fights with logic.</span>
            <span>The signal fights with memory.</span>
            <span>The dream keeps receipts.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
