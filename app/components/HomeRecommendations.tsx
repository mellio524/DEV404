"use client";

import { useMemo, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { albums, videos } from "../data";

const recommended = [
  {
    key: "lucid",
    label: "Lucid Dreams",
    videoId: "S-YtBZ19jqE",
    albumId: "OLAK5uy_noN2bhedpcNRpeYLL-mXgCZskcnUPxWlo",
  },
  {
    key: "gatekeepers",
    label: "Gate Keepers",
    videoId: "DGX8xh6zOVc",
    albumId: "OLAK5uy_miz4J2_gqMMhFXhapXzD3OHN1mEWd-WaY",
  },
];

type PlaybackMode = "video" | "album";

export function HomeRecommendations() {
  const [activeKey, setActiveKey] = useState(recommended[0].key);
  const [mode, setMode] = useState<PlaybackMode>("video");
  const [panelMotion, setPanelMotion] = useState({ mx: 72, my: 24, rx: 0, ry: 0 });

  const items = useMemo(
    () =>
      recommended.map((item) => ({
        ...item,
        album: albums.find((album) => album.id === item.albumId),
        video: videos.find((video) => video.id === item.videoId),
      })),
    [],
  );

  const active = items.find((item) => item.key === activeKey) ?? items[0];
  const embedSrc =
    mode === "video"
      ? `https://www.youtube.com/embed/${active.videoId}`
      : `https://www.youtube.com/embed/videoseries?list=${active.albumId}`;

  function movePanel(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPanelMotion({
      mx: x * 100,
      my: y * 100,
      rx: (0.5 - y) * 5,
      ry: (x - 0.5) * 7,
    });
  }

  return (
    <section
      className="home-recommendations"
      aria-label="Recommended DEV 404 media"
      onPointerLeave={() => setPanelMotion({ mx: 72, my: 24, rx: 0, ry: 0 })}
      onPointerMove={movePanel}
      style={
        {
          "--mx": `${panelMotion.mx}%`,
          "--my": `${panelMotion.my}%`,
          "--rx": `${panelMotion.rx}deg`,
          "--ry": `${panelMotion.ry}deg`,
        } as CSSProperties
      }
    >
      <div className="recommend-header">
        <p>Recommended</p>
        <span>{mode === "video" ? "Video channel" : "Album releases"}</span>
      </div>

      <div className="recommend-player">
        <div className="recommend-live-badge">
          <i />
          <span>{active.label}</span>
        </div>
        <iframe
          key={`${active.key}-${mode}`}
          title={`${active.label} ${mode}`}
          src={embedSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="recommend-mode" aria-label="Playback mode">
        <button className={mode === "video" ? "active" : ""} onClick={() => setMode("video")}>
          Play video
        </button>
        <button className={mode === "album" ? "active" : ""} onClick={() => setMode("album")}>
          Play album
        </button>
      </div>

      <div className="recommend-readout">
        <span>Now transmitting</span>
        <b>{mode === "video" ? active.video?.title : active.album?.title}</b>
        <small>{mode === "video" ? active.video?.zone : active.album?.tracks}</small>
      </div>

      <div className="recommend-stack">
        {items.map((item) => (
          <article className={item.key === active.key ? "active" : ""} key={item.key}>
            <button
              className="recommend-main"
              onClick={() => {
                setActiveKey(item.key);
                setMode("video");
              }}
            >
              <i className="recommend-play-dot" />
              <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt="" />
              <span>
                <small>Video</small>
                <b>{item.video?.title ?? item.label}</b>
              </span>
            </button>
            <button
              className="recommend-album"
              onClick={() => {
                setActiveKey(item.key);
                setMode("album");
              }}
            >
              <i className="recommend-album-dot" />
              <img src={item.album?.image ?? "/dev404/bg-music-fit.png"} alt="" />
              <span>
                <small>Matching album</small>
                <b>{item.album?.title ?? item.label}</b>
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
