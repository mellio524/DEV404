import { MusicVault } from "../components/MusicVault";
import { RoomHero } from "../components/RoomHero";
import { albums } from "../data";

export default function MusicPage() {
  return (
    <main className="dev-page">
      <RoomHero
        eyebrow="Music / official releases only"
        title="The album vault opens from the DEV 404 Releases page."
        copy="Select any official album release and the room reshapes around its signal. No extras, no filler playlists, just the official DEV 404 album releases."
        image="/dev404/gatekeepers-grave.png"
        stat={`${albums.length} releases`}
      />
      <MusicVault />
    </main>
  );
}
