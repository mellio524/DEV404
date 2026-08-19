import { RoomHero } from "../components/RoomHero";
import { videos } from "../data";

const episodeOrder = [
  "Episode 1 - Fractured Horizons",
  "Episode 2 - Movies, Lies and War",
  "Episode 3 - Eviction Notice",
  "Episode 4 - Break Out",
  "Episode 5 - The Story So Far",
  "The Story So Far",
  "Break Out",
];

const episodes = episodeOrder
  .map((title) => videos.find((video) => video.title === title))
  .filter((video) => video !== undefined);

export default function SeriesPage() {
  return (
    <main className="dream-page">
      <RoomHero
        eyebrow="Series room / Error Sequence"
        title="The episodes are arranged like doors in a corridor."
        copy="The DEV 404 series is organized here as its own page, with the Error Sequence chapter run separated from the general video archive."
        imageId="SoCCRWBl6Js"
      />
      <section className="content-room series-corridor">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">Episode corridor</p>
            <h2>{episodes.length} chapters</h2>
          </div>
          <p>Start at Fractured Horizons or jump into the latest story-so-far signal.</p>
        </div>
        <div className="episode-line">
          {episodes.map((episode, index) => (
            <a
              href={`https://www.youtube.com/watch?v=${episode.id}`}
              className="episode-door"
              key={episode.id}
            >
              <img src={`https://img.youtube.com/vi/${episode.id}/hqdefault.jpg`} alt="" />
              <span>Episode {String(index + 1).padStart(2, "0")}</span>
              <b>{episode.title}</b>
              <small>{episode.note}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
