import type { CSSProperties } from "react";
import { MusicVault } from "../components/MusicVault";
import { PageLoopVideo } from "../components/PageLoopVideo";

export default function MusicPage() {
  return (
    <main
      className="ref-page ref-music"
      style={{ "--page-bg": "url('/dev404/bg-music-fit.png')" } as CSSProperties}
    >
      <PageLoopVideo poster="/dev404/bg-music-fit.png" src="/dev404/music-loop-2.mp4" />
      <section className="cinema-copy music-copy">
        <p className="ref-kicker">New albums. Endless loop.</p>
        <h1>Music</h1>
      </section>
      <MusicVault />
    </main>
  );
}
