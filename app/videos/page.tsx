import { RoomHero } from "../components/RoomHero";
import { VideoArchive } from "../components/VideoArchive";
import { videos } from "../data";

export default function VideosPage() {
  return (
    <main className="dream-page">
      <RoomHero
        eyebrow="Video room / official archive"
        title="The videos are mirrors with doors behind them."
        copy="Browse the newest Lucid Dreams visuals, Bloodline pieces, Error Sequence chapters, and the older archive from one organized room."
        imageId={videos[0].id}
      />
      <VideoArchive />
    </main>
  );
}
