"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { albums } from "../data";

export function MusicVault() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]);

  return (
    <section className="content-room music-vault">
      <div className="room-title-row">
        <div>
          <p className="section-kicker">Music / all albums</p>
          <h2>{activeAlbum.title}</h2>
        </div>
        <p>{activeAlbum.note}</p>
      </div>
      <div className="vault-layout">
        <div className="hologram-player album-player">
          <iframe
            key={activeAlbum.id}
            title={activeAlbum.title}
            src={`https://www.youtube.com/embed/videoseries?list=${activeAlbum.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="album-stack" aria-label="Album and playlist selector">
          {albums.map((album, index) => (
            <button
              key={album.id}
              className={activeAlbum.id === album.id ? "active album-door" : "album-door"}
              onClick={() => setActiveAlbum(album)}
              style={{ "--z": index } as CSSProperties}
            >
              <span>{album.kind}</span>
              <b>{album.title}</b>
              <small>{album.era}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
