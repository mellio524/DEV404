"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { albums, sourceLinks } from "../data";

export function MusicVault() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]);

  return (
    <section className="content-room music-vault">
      <div className="room-title-row">
        <div>
          <p className="section-kicker">Music / official DEV 404 releases</p>
          <h2>{activeAlbum.title}</h2>
        </div>
        <p>{activeAlbum.note}</p>
      </div>
      <div className="vault-layout">
        <div className="album-console">
          <div className="album-art-stage">
            <img src={activeAlbum.image} alt="" />
            <span>{activeAlbum.era}</span>
          </div>
          <div className="hologram-player album-player">
            <iframe
              key={activeAlbum.id}
              title={activeAlbum.title}
              src={`https://www.youtube.com/embed/videoseries?list=${activeAlbum.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="album-stack" aria-label="Official album selector">
          {albums.map((album, index) => (
            <button
              key={album.id}
              className={activeAlbum.id === album.id ? "active album-door" : "album-door"}
              onClick={() => setActiveAlbum(album)}
              style={{ "--z": index } as CSSProperties}
            >
              <span>{album.tracks}</span>
              <b>{album.title}</b>
              <small>{album.era}</small>
            </button>
          ))}
        </div>
      </div>
      <a className="source-link" href={sourceLinks.releases}>
        View official releases on YouTube
      </a>
    </section>
  );
}
