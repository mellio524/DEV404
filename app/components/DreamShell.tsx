"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navRooms } from "../data";

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
    const timer = window.setTimeout(() => setPhase("idle"), 760);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  function enterRoom(href: string, title: string) {
    if (href === pathname || phase === "closing") {
      return;
    }

    setTarget(title);
    setPhase("closing");
    window.setTimeout(() => {
      router.push(href);
    }, 620);
  }

  return (
    <div className={`dream-shell ${phase !== "idle" ? `is-${phase}` : ""}`}>
      <div className="dimensional-sky" aria-hidden="true" />
      <div className="depth-grid" aria-hidden="true" />
      <header className="door-nav" aria-label="DEV 404 rooms">
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
      </header>
      <div className="world-perspective">
        <div className="page-plane">{children}</div>
      </div>
      <div className="door-transition" aria-hidden="true">
        <div className="door-leaf door-left" />
        <div className="door-leaf door-right" />
        <div className="door-glow">
          <span>Entering {target}</span>
        </div>
      </div>
    </div>
  );
}
