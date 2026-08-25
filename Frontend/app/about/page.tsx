import type { CSSProperties } from "react";
import { PageLoopVideo } from "../components/PageLoopVideo";

export default function AboutPage() {
  return (
    <main
      className="ref-page ref-about"
      style={{ "--page-bg": "url('/dev404/bg-about-fit.png')" } as CSSProperties}
    >
      <PageLoopVideo poster="/dev404/bg-about-fit.png" src="/dev404/info-loop-2.mp4" />
      <section className="cinema-copy about-copy">
        <p className="ref-kicker">I write what others bury.</p>
        <h1>About DEV 404</h1>
        <div className="about-statement">
          <p>
            DEV 404 is more than an artist name-it is the space where music, technology, memory, and imagination come
            together to say the things that are hardest to say out loud.
          </p>
          <p>
            I use every tool I can put my hands on to build that space. Music becomes the voice. Video becomes the
            world around it. Sound design, visual effects, animation, code, AI, editing, and digital art all become
            pieces of the same signal. I do not use technology to hide the truth-I use it to pull the truth into the
            light in a way that can be felt.
          </p>
          <p>
            Every project starts with something real: a memory, a fear, a dream, a question, a scar, or a moment that
            never fully made sense. From there, I build stories that travel through the mind and deeper into the soul.
            Some are dark. Some are loud. Some live in broken dreams, haunted rooms, endless loops, and worlds that feel
            impossible. But underneath all of it is a search for understanding.
          </p>
          <p>
            I am drawn to reality when it comes undone-when the mask slips, when the past leaks into the present, and
            when you are forced to look at life without the filters, excuses, or dressings that make it easier to
            swallow. My work is not here to make pain look pretty or turn truth into something comfortable. It is here
            to face it honestly.
          </p>
          <p>
            DEV 404 is a transmission from that place: where logic meets emotion, where code meets chaos, and where the
            pieces of a life can be rebuilt into a story worth hearing.
          </p>
        </div>
      </section>

      <aside className="about-stats">
        <article><b>Dreams + The Past</b></article>
        <article><b>Truth + Love</b></article>
        <article><b>Fear + Control</b></article>
        <article><b>Memory + Logic</b></article>
        <blockquote>DEV 404 does not make songs. He opens chambers.</blockquote>
      </aside>
    </main>
  );
}
