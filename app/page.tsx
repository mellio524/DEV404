import { RoomHero } from "./components/RoomHero";
import { dreamStats, navRooms, videos } from "./data";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <main className="dream-page home-room">
      <RoomHero
        eyebrow="DEV-404.com / lucid entry"
        title="Step into the dream of DEV"
        copy="The site is no longer a flat hub. It is a set of connected dream rooms: music, videos, comics, movies, and series, each entered through a door."
      />
      <section className="content-room home-index">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">Dream map</p>
            <h2>The same DEV universe, rebuilt as rooms.</h2>
          </div>
          <p>
            DEV still stands at the center: a digital engineer, artist, and
            techno-detective moving through signal, memory, code, and music.
          </p>
        </div>
        <div className="portal-grid">
          {navRooms.slice(1).map((room, index) => (
            <a
              className="portal-card"
              href={room.href}
              key={room.id}
              style={{ "--portal-index": index } as CSSProperties}
            >
              <span>{room.subtitle}</span>
              <b>{room.title}</b>
            </a>
          ))}
        </div>
      </section>
      <section className="content-room signal-summary">
        {dreamStats.map((stat) => (
          <div className="stat-monolith" key={stat.label}>
            <span>{stat.label}</span>
            <b>{stat.value}</b>
          </div>
        ))}
      </section>
      <section className="content-room latest-room">
        <div className="room-title-row">
          <div>
            <p className="section-kicker">Latest signal</p>
            <h2>{videos[0].title}</h2>
          </div>
          <p>{videos[0].note}</p>
        </div>
        <div className="hologram-player hero-video">
          <iframe
            title={videos[0].title}
            src={`https://www.youtube.com/embed/${videos[0].id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
