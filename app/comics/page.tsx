import { RoomHero } from "../components/RoomHero";

export default function ComicsPage() {
  return (
    <main className="dream-page">
      <RoomHero
        eyebrow="Comics room / sequential archive"
        title="The comic pages are still encrypted."
        copy="This room preserves the DEV 404 comics section from the original site, staged as a dream archive ready for future issues and page readers."
        imageId="Yq0oQYQhIf4"
        align="split"
      />
      <section className="content-room story-panels">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">DEV 404 #1</p>
            <h2>Sequential art archive</h2>
          </div>
          <p>
            The original site treated comics as a database. This version keeps
            that idea, but presents it like a drawer opening in the dream.
          </p>
        </div>
        <div className="panel-grid">
          <article className="story-card tall">
            <span>Stored issue</span>
            <h3>DEV 404 #1</h3>
            <p>The origin story begins in the archive.</p>
          </article>
          <article className="story-card">
            <span>Status</span>
            <h3>Encrypted</h3>
            <p>Pages are staged for a future interactive reader.</p>
          </article>
          <article className="story-card">
            <span>Next state</span>
            <h3>Dream reader</h3>
            <p>A page-turning room can be added when final comic assets are ready.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
