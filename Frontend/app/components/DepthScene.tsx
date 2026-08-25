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
        {mode === "home" ? (
          <>
            <div className="dream-double one" aria-hidden="true" />
            <div className="dream-double two" aria-hidden="true" />
            <div className="nightmare-clock" aria-hidden="true">3:17</div>
            <div className="thriller-tape" aria-hidden="true">
              <span>WAKE LOOP</span>
              <span>NO EXIT</span>
              <span>SIGNAL 404</span>
            </div>
          </>
        ) : null}
        <div className="scene-breach" aria-hidden="true" />
        <div className="scene-copy">
          <p>DEV 404</p>
          <h1>{mode === "home" ? "DON'T WAKE THE SIGNAL" : "ARTIST FILE: SIGNAL 404"}</h1>
          <span>
            {mode === "home"
              ? `${active.tone} The room is dreaming back, and every image fragment is a door.`
              : active.tone}
          </span>
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
