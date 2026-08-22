"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { sceneImages } from "../data";

type DepthSceneProps = {
  mode?: "home" | "about";
};

export function DepthScene({ mode = "home" }: DepthSceneProps) {
  const [active, setActive] = useState(sceneImages[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function moveDepth(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }

  return (
    <section
      className={`depth-scene ${mode}`}
      onPointerMove={moveDepth}
      style={{ "--tilt-x": tilt.x, "--tilt-y": tilt.y } as CSSProperties}
    >
      <div className="scene-core">
        <img src={active.src} alt="" />
        <div className="scene-breach" aria-hidden="true" />
        <div className="scene-copy">
          <p>DEV 404</p>
          <h1>{mode === "home" ? "TRIPPY TECH THRILLER" : "ARTIST FILE: SIGNAL 404"}</h1>
          <span>{active.tone}</span>
        </div>
      </div>
      <div className="artifact-ring" aria-label="Scene depth controls">
        {sceneImages.map((image, index) => (
          <button
            key={image.id}
            className={active.id === image.id ? "artifact active" : "artifact"}
            onClick={() => setActive(image)}
            style={{ "--i": index } as CSSProperties}
          >
            <img src={image.src} alt="" />
            <span>{image.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
