"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { albums, sourceLinks } from "../data";

export function MusicVault() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const activeAlbum = albums[activeIndex];
  const activeTracks = Number.parseInt(activeAlbum.tracks, 10) || 1;

  function step(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + albums.length) % albums.length);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    });
  }

  const motionStyle = {
    "--mx": cursor.x.toFixed(3),
    "--my": cursor.y.toFixed(3),
  } as CSSProperties;

  return (
    <section className="ref-music-stage" onPointerMove={handlePointerMove} style={motionStyle}>
      <div className="music-library-panel">
        <div className="music-section-head">
          <div>
            <p>Official releases</p>
            <h2>Archive Matrix</h2>
          </div>
          <span>{albums.length} signals</span>
        </div>

        <div className="album-vault-grid" aria-label="DEV 404 official albums">
          {albums.map((album, index) => (
            <button
              key={album.id}
              className={activeAlbum.id === album.id ? "active album-vault-card" : "album-vault-card"}
              onClick={() => setActiveIndex(index)}
            >
              <span className="album-card-index">{String(index + 1).padStart(2, "0")}</span>
              <img src={album.image} alt={`${album.title} official release cover`} />
              <span className="album-card-copy">
                <b>{album.title}</b>
                <small>{album.tracks}</small>
              </span>
            </button>
          ))}
        </div>

        <a className="music-source-link" href={sourceLinks.releases} target="_blank" rel="noreferrer">
          Open official releases
        </a>
      </div>

      <div className="music-player-panel">
        <div className="music-player-orbit" aria-hidden="true" />
        <div className="music-player-topline">
          <span>Playback core</span>
          <b>{activeAlbum.tracks}</b>
        </div>

        <div className="music-player-identity">
          <img src={activeAlbum.image} alt={`${activeAlbum.title} official release cover`} />
          <div>
            <p>{activeAlbum.era}</p>
            <h2>{activeAlbum.title}</h2>
            <span>{activeAlbum.note}</span>
          </div>
        </div>

        <div className="music-player-frame">
          <iframe
            key={activeAlbum.id}
            title={`${activeAlbum.title} playlist`}
            src={`https://www.youtube.com/embed/videoseries?list=${activeAlbum.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="music-console-strip">
          <div className="waveform music-waveform" aria-hidden="true">
            {Array.from({ length: 54 }).map((_, index) => (
              <i key={index} style={{ "--h": `${18 + ((index * 19 + activeIndex * 7) % 72)}%` } as CSSProperties} />
            ))}
          </div>

          <div className="music-player-controls">
            <button onClick={() => step(-1)} aria-label="Previous album">
              Prev
            </button>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(albums.length).padStart(2, "0")}
            </span>
            <button onClick={() => step(1)} aria-label="Next album">
              Next
            </button>
          </div>
        </div>

        <div className="track-chip-grid">
          {Array.from({ length: Math.min(activeTracks, 12) }).map((_, index) => (
            <span key={index} className={index === 0 ? "active" : ""}>
              {String(index + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
