"use client";

import { useMemo, useState } from "react";
import { sourceLinks, videos, type VideoZone } from "../data";

const filters: Array<VideoZone | "All"> = [
  "All",
  "New Signal",
  "Lucid Dreams",
  "Gate Keepers",
  "Error Sequence",
  "Bloodline",
  "Archive",
];

export function VideoArchive() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [filter, setFilter] = useState<VideoZone | "All">("All");

  const filteredVideos = useMemo(
    () => videos.filter((video) => filter === "All" || video.zone === filter),
    [filter],
  );

  return (
    <section className="content-room video-vault">
      <div className="room-title-row">
        <div>
          <p className="section-kicker">Videos / official archive</p>
          <h2>{activeVideo.title}</h2>
        </div>
        <p>{activeVideo.note}</p>
      </div>
      <div className="vault-layout video-layout">
        <div className="hologram-player video-player">
          <iframe
            key={activeVideo.id}
            title={activeVideo.title}
            src={`https://www.youtube.com/embed/${activeVideo.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-control-wall">
          <div className="filter-row" aria-label="Video filters">
            {filters.map((zone) => (
              <button
                key={zone}
                className={filter === zone ? "active" : ""}
                onClick={() => setFilter(zone)}
              >
                {zone}
              </button>
            ))}
          </div>
          <div className="video-grid-list">
            {filteredVideos.map((video, index) => (
              <button
                className={video.id === activeVideo.id ? "active video-door" : "video-door"}
                key={video.id}
                onClick={() => setActiveVideo(video)}
              >
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" />
                <span>
                  <small>{String(index + 1).padStart(2, "0")} / {video.zone} / {video.meta}</small>
                  <b>{video.title}</b>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <a className="source-link" href={sourceLinks.videos}>
        View official videos on YouTube
      </a>
    </section>
  );
}
