type PageLoopVideoProps = {
  poster: string;
  src: string;
};

export function PageLoopVideo({ poster, src }: PageLoopVideoProps) {
  return (
    <video
      aria-hidden="true"
      autoPlay
      className="page-loop-video"
      key={src}
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
      src={src}
    />
  );
}
