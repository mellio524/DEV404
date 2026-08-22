import { RoomHero } from "../components/RoomHero";
import { VideoArchive } from "../components/VideoArchive";
import { videos } from "../data";

export default function VideosPage() {
  return (
    <main className="dev-page">
      <RoomHero
        eyebrow="Videos / official channel archive"
        title="Every video is filed like evidence from the dream."
        copy="The player stays live while the archive wall sorts the official DEV 404 videos by signal type: new drops, lucid fragments, story episodes, bloodline cuts, and archive transmissions."
        image="/dev404/lucid-crowd.png"
        stat={`${videos.length} videos`}
      />
      <VideoArchive />
    </main>
  );
}
