"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { sourceLinks, videos } from "../data";

const zones = ["All", ...Array.from(new Set(videos.map((video) => video.zone)))];

export function VideoArchive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeZone, setActiveZone] = useState("All");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const activeVideo = videos[activeIndex];
  const filteredVideos = activeZone === "All" ? videos : videos.filter((video) => video.zone === activeZone);
  const upcomingVideos = Array.from({ length: 4 }, (_, index) => videos[(activeIndex + index + 1) % videos.length]);

  function selectVideo(videoId: string) {
    const nextIndex = videos.findIndex((video) => video.id === videoId);
    setActiveIndex(nextIndex >= 0 ? nextIndex : 0);
  }

  function step(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + videos.length) % videos.length);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    });
  }

  const motionStyle = {
    "--vx": cursor.x.toFixed(3),
    "--vy": cursor.y.toFixed(3),
  } as CSSProperties;

  return (
    <section className="dream-theatre" onPointerMove={handlePointerMove} style={motionStyle}>
      <div className="theatre-screen-panel">
        <div className="theatre-marquee">
          <div>
            <p>Now showing</p>
            <h2>{activeVideo.title}</h2>
          </div>
          <span>{activeVideo.zone}</span>
        </div>

        <div className="theatre-screen">
          <iframe
            key={activeVideo.id}
            title={activeVideo.title}
            src={`https://www.youtube.com/embed/${activeVideo.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="theatre-console">
          <button onClick={() => step(-1)} aria-label="Previous video">
            Prev
          </button>
          <div>
            <b>{String(activeIndex + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}</b>
            <span>{activeVideo.note}</span>
          </div>
          <button onClick={() => step(1)} aria-label="Next video">
            Next
          </button>
        </div>

        <div className="theatre-reel-strip" aria-label="Up next videos">
          {upcomingVideos.map((video) => (
            <button key={video.id} onClick={() => selectVideo(video.id)}>
              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" />
              <span>{video.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="video-library-panel">
        <div className="video-library-head">
          <div>
            <p>Visual archive</p>
            <h2>Dream Library</h2>
          </div>
          <a href={sourceLinks.videos} target="_blank" rel="noreferrer">
            Official channel
          </a>
        </div>

        <div className="video-zone-tabs" aria-label="Video category filters">
          {zones.map((zone) => (
            <button
              className={activeZone === zone ? "active" : ""}
              key={zone}
              onClick={() => setActiveZone(zone)}
            >
              {zone}
            </button>
          ))}
        </div>

        <div className="video-library-grid" aria-label="DEV 404 video library">
          {filteredVideos.map((video) => (
            <button
              className={activeVideo.id === video.id ? "active theatre-video-card" : "theatre-video-card"}
              key={video.id}
              onClick={() => selectVideo(video.id)}
            >
              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={`${video.title} thumbnail`} />
              <span className="theatre-play-dot" />
              <span className="video-card-copy">
                <small>{video.zone}</small>
                <b>{video.title}</b>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
