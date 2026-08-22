import { DepthScene } from "./components/DepthScene";
import { albums, sceneImages, videos } from "./data";

export default function Home() {
  return (
    <main className="dev-page home-room">
      <DepthScene />
      <section className="content-room manifesto-grid">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">DEV-404.com / official hub</p>
            <h2>A cyberpunk music world built like a haunted machine.</h2>
          </div>
          <p>
            DEV 404 lives between code, art, music, and thriller imagery. This
            version treats the site like a set of rooms instead of a flat page:
            images drift in the back, controls pull them forward, and every tab
            stays locked to the red-tie signal.
          </p>
        </div>
        <div className="signal-stats">
          <a href="/music">
            <span>{albums.length}</span>
            <b>official albums</b>
          </a>
          <a href="/videos">
            <span>{videos.length}</span>
            <b>official videos</b>
          </a>
          <a href="/about">
            <span>{sceneImages.length}</span>
            <b>visual fragments</b>
          </a>
        </div>
      </section>
      <section className="content-room fracture-strip">
        {sceneImages.slice(1, 7).map((image) => (
          <article key={image.id}>
            <img src={image.src} alt="" />
            <div>
              <span>{image.title}</span>
              <p>{image.tone}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
