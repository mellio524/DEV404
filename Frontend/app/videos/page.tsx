import type { CSSProperties } from "react";
import { PageLoopVideo } from "../components/PageLoopVideo";
import { VideoArchive } from "../components/VideoArchive";

export default function VideosPage() {
  return (
    <main
      className="ref-page ref-videos"
      style={{ "--page-bg": "url('/dev404/bg-video-fit.png')" } as CSSProperties}
    >
      <PageLoopVideo poster="/dev404/bg-video-fit.png" src="/dev404/video-loop-2.mp4" />
      <section className="cinema-copy video-copy">
        <p className="ref-kicker">Watch the loop unfold.</p>
        <h1>Videos</h1>
      </section>
      <VideoArchive />
    </main>
  );
}
