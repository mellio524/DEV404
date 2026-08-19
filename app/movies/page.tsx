import { RoomHero } from "../components/RoomHero";

export default function MoviesPage() {
  return (
    <main className="dream-page">
      <RoomHero
        eyebrow="Movies room / signal theater"
        title="Reality is being rewritten on the screen."
        copy="The Movies tab remains part of DEV-404.com, redesigned as an uncanny theater for future long-form releases."
        imageId="eKRg-2ryFc4"
        align="split"
      />
      <section className="content-room theater-room">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">Coming signal</p>
            <h2>Movies, lies, war, and whatever wakes up next.</h2>
          </div>
          <p>
            This room is intentionally staged, not empty: the audience sees the
            seats, the screen, and the signal waiting behind the curtain.
          </p>
        </div>
        <div className="cinema-strip">
          {["Script recovered", "Footage pending", "Projection unstable"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
