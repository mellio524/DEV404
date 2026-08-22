import { DepthScene } from "../components/DepthScene";
import { sourceLinks } from "../data";

export default function AboutPage() {
  return (
    <main className="dev-page about-room">
      <DepthScene mode="about" />
      <section className="content-room dossier">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">About / DEV 404 artist file</p>
            <h2>DEV 404 is music, code, art, and story folded into one signal.</h2>
          </div>
          <p>
            The public DEV 404 world presents itself as a cyberpunk creative hub
            where official music, videos, comics, and digital art collide. This
            page keeps the focus on the artist identity: black suit, red tie,
            dark rooms, fractured dreams, and the feeling that every screen is
            part of the same thriller.
          </p>
        </div>
        <div className="dossier-grid">
          <article>
            <span>01</span>
            <h3>Sound</h3>
            <p>
              Official albums are treated like chapters: releases become rooms,
              tracklists become hallways, and the player stays embedded inside
              the world.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Vision</h3>
            <p>
              Videos are organized like recovered footage from the same
              universe, moving between lucid dream logic, family static, and
              error-sequence storytelling.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Signature</h3>
            <p>
              DEV stays consistent across the imagery: red bandana, dark suit,
              shades, red tie, thriller lighting, and the sense of a performer
              trapped inside his own system.
            </p>
          </article>
        </div>
        <div className="official-links">
          <a href={sourceLinks.home}>Official DEV-404.com</a>
          <a href={sourceLinks.releases}>Official albums</a>
          <a href={sourceLinks.videos}>Official videos</a>
        </div>
      </section>
    </main>
  );
}
