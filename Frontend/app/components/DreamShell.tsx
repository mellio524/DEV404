"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { navRooms, sceneImages } from "../data";

type DreamShellProps = {
  children: ReactNode;
};

const socialLinks = [
  { label: "YouTube", handle: "@DEV_Music_404", href: "https://www.youtube.com/@DEV_Music_404" },
  {
    label: "Spotify",
    handle: "DEV 404",
    href: "https://open.spotify.com/artist/7lvmTahHl3ViENKZrWjsG4?si=C1ryDQpsQ-K65d9NfRuMGw",
  },
  { label: "Facebook", handle: "Profile", href: "https://www.facebook.com/profile.php?id=61578195951086" },
  { label: "X", handle: "@dev_40435715", href: "https://x.com/dev_40435715" },
];

export function DreamShell({ children }: DreamShellProps) {
  const pathname = usePathname();
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

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTarget(title);
    setPhase("closing");
    window.setTimeout(() => {
      window.location.assign(href);
    }, 430);
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
      <header className="top-deck dial-deck">
        <button
          className="brand-lock"
          onClick={() => enterRoom("/", "Home")}
          aria-label="Go to DEV 404 home"
        >
          <b>DEV 404</b>
        </button>
        <nav className="door-nav" aria-label="DEV 404 site tabs">
          {navRooms.map((room, index) => (
            <button
              key={room.id}
              className={pathname === room.href ? "door-tab active" : "door-tab"}
              onClick={() => enterRoom(room.href, room.title)}
              style={{ "--door-index": index } as CSSProperties}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{room.title}</span>
            </button>
          ))}
        </nav>
      </header>
      <div className="world-perspective">
        <div className="page-plane">{children}</div>
      </div>
      <footer className="site-footer" aria-label="DEV 404 social links">
        <span className="footer-signal">Signal links</span>
        <nav>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              <b>{link.label}</b>
              <span>{link.handle}</span>
            </a>
          ))}
        </nav>
      </footer>
      <div className="door-transition" aria-hidden="true">
        <div className="door-slit" />
        <span>Entering {target}</span>
      </div>
    </div>
  );
}
