type RoomHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  stat: string;
};

export function RoomHero({ eyebrow, title, copy, image, stat }: RoomHeroProps) {
  return (
    <section className="room-hero">
      <img className="room-hero-image" src={image} alt="" />
      <div className="room-hero-tunnel" aria-hidden="true" />
      <div className="room-hero-copy">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{copy}</span>
      </div>
      <div className="room-hero-stat">
        <b>{stat}</b>
        <span>official source</span>
      </div>
    </section>
  );
}
