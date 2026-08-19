type RoomHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  imageId?: string;
  align?: "wide" | "split";
};

export function RoomHero({
  eyebrow,
  title,
  copy,
  imageId = "S-YtBZ19jqE",
  align = "wide",
}: RoomHeroProps) {
  return (
    <section className={`room-hero ${align}`}>
      <img
        className="room-hero-image"
        src={`https://img.youtube.com/vi/${imageId}/maxresdefault.jpg`}
        alt=""
      />
      <div className="room-hero-depth" aria-hidden="true" />
      <div className="room-hero-copy">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{copy}</span>
      </div>
    </section>
  );
}
