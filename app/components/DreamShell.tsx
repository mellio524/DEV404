"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navRooms, sceneImages } from "../data";

type DreamShellProps = {
  children: ReactNode;
};

export function DreamShell({ children }: DreamShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("opening");
  const [target, setTarget] = useState("DEV 404");

  useEffect(() => {
    setPhase("opening");
    const timer = window.setTimeout(() => setPhase("idle"), 640);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  function enterRoom(href: string, title: string) {
    if (href === pathname || phase === "closing") {
      return;
    }

    setTarget(title);
    setPhase("closing");
    window.setTimeout(() => router.push(href), 430);
  }

  return (
    <div className={`dev-shell ${phase !== "idle" ? `is-${phase}` : ""}`}>
      <div className="signal-sky" aria-hidden="true" />
      <div className="scan-field" aria-hidden="true" />
      <div className="far-depth" aria-hidden="true">
        {sceneImages.slice(0, 5).map((image, index) => (
          <img
            alt=""
            key={image.id}
            src={image.src}
            style={{ "--i": index } as CSSProperties}
          />
        ))}
      </div>
      <header className="top-deck">
        <button
          className="brand-lock"
          onClick={() => enterRoom("/", "Home")}
          aria-label="Go to DEV 404 home"
        >
          <b>DEV 404</b>
          <span>signal not found</span>
        </button>
        <nav className="door-nav" aria-label="DEV 404 site tabs">
          {navRooms.map((room, index) => (
            <button
              key={room.id}
              className={pathname === room.href ? "door-tab active" : "door-tab"}
              onClick={() => enterRoom(room.href, room.title)}
              style={{ "--door-index": index } as CSSProperties}
            >
              <span>{room.title}</span>
              <small>{room.subtitle}</small>
            </button>
          ))}
        </nav>
      </header>
      <div className="world-perspective">
        <div className="page-plane">{children}</div>
      </div>
      <div className="door-transition" aria-hidden="true">
        <div className="door-slit" />
        <span>Entering {target}</span>
      </div>
    </div>
  );
}
