import { MusicVault } from "../components/MusicVault";
import { RoomHero } from "../components/RoomHero";
import { albums } from "../data";

export default function MusicPage() {
  return (
    <main className="dream-page">
      <RoomHero
        eyebrow="Music room / all albums"
        title="The album vault is a hallway of sound."
        copy="Every official DEV 404 album and playlist lives here, organized as selectable doors with an embedded stream."
        imageId="jdoeXD9jZ3g"
      />
      <MusicVault />
      <section className="content-room archive-table">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">Full list</p>
            <h2>{albums.length} music doors</h2>
          </div>
          <p>Albums, playlists, and series are separated by type so the vault stays readable.</p>
        </div>
        <div className="organized-list">
          {albums.map((album) => (
            <a
              href={`https://www.youtube.com/playlist?list=${album.id}`}
              key={album.id}
              className="list-row"
            >
              <span>{album.kind}</span>
              <b>{album.title}</b>
              <small>{album.era}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
