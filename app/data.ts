export type DoorId = "home" | "music" | "videos" | "comics" | "movies" | "series";

export type NavRoom = {
  id: DoorId;
  title: string;
  href: string;
  subtitle: string;
};

export type Album = {
  title: string;
  id: string;
  kind: "Album" | "Playlist" | "Series";
  era: string;
  note: string;
};

export type VideoZone = "Lucid" | "Bloodline" | "Error Sequence" | "Archive";

export type Video = {
  title: string;
  id: string;
  zone: VideoZone;
  note: string;
};

export const navRooms: NavRoom[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
    subtitle: "Dream entry",
  },
  {
    id: "music",
    title: "Music",
    href: "/music",
    subtitle: "All albums",
  },
  {
    id: "videos",
    title: "Videos",
    href: "/videos",
    subtitle: "Full visual archive",
  },
  {
    id: "comics",
    title: "Comics",
    href: "/comics",
    subtitle: "Sequential art",
  },
  {
    id: "movies",
    title: "Movies",
    href: "/movies",
    subtitle: "Coming signal",
  },
  {
    id: "series",
    title: "Series",
    href: "/series",
    subtitle: "Episodes",
  },
];

export const albums: Album[] = [
  {
    title: "Mini Music Series",
    id: "PLMRGWgb7owuE",
    kind: "Playlist",
    era: "Newest signal",
    note: "Fresh dream fragments and short-form transmissions from the current DEV 404 run.",
  },
  {
    title: "DEV 404: Error Sequence",
    id: "PLpbLxNqDQy7k8MD0jliGjvptF4cE7D80T",
    kind: "Series",
    era: "Chapter run",
    note: "The organized episode spine: Fractured Horizons through the story-so-far chapters.",
  },
  {
    title: "Full Music Videos",
    id: "PLpbLxNqDQy7k4s6eVrdJOe4snyqEfq-QS",
    kind: "Playlist",
    era: "Visual vault",
    note: "The complete official music video collection gathered into one stream.",
  },
  {
    title: "DEV 404 Shorts",
    id: "PLpbLxNqDQy7kPuQGFnqKfTnnjgiZ3vlVz",
    kind: "Playlist",
    era: "Short bursts",
    note: "Fast cuts from the edge of the dream.",
  },
  {
    title: "Hello, World!",
    id: "OLAK5uy_na3MhE_Q3ushYs7n20lXVeBEf09pY69qo",
    kind: "Album",
    era: "Origin",
    note: "The system wakes up and says DEV's name back.",
  },
  {
    title: "BROKEN",
    id: "OLAK5uy_nXeKfg375hfgChn3aMNG9Kd49g1U8YL0g",
    kind: "Album",
    era: "Fracture",
    note: "A damaged album with light leaking through every seam of the signal.",
  },
  {
    title: "Fractured Horizons",
    id: "OLAK5uy_mMAopvO3gpyJ5M143_JGK7WGzctI-vm2M",
    kind: "Album",
    era: "Skyline split",
    note: "The place where the story starts tearing open.",
  },
  {
    title: "Movies Lies War",
    id: "OLAK5uy_lMK0hBiLJV0G1QpwIdeheOM78QL19TI4Y",
    kind: "Album",
    era: "Propaganda dream",
    note: "The signal learns cinema, then weaponizes it.",
  },
  {
    title: "Eviction Notice",
    id: "OLAK5uy_lMLAx0P1MstSztk7LLSNmQCwphlUyN6R0",
    kind: "Album",
    era: "Red paper",
    note: "Reality receives a warning it cannot ignore.",
  },
];

export const videos: Video[] = [
  {
    title: "LUCID DREAMS",
    id: "S-YtBZ19jqE",
    zone: "Lucid",
    note: "The doorway into the new DEV dream.",
  },
  {
    title: "Blood Isn't BluePrint",
    id: "jdoeXD9jZ3g",
    zone: "Bloodline",
    note: "Family code, memory damage, and inheritance under glass.",
  },
  {
    title: "Never",
    id: "3BfuQUZDM3M",
    zone: "Bloodline",
    note: "A refusal loop disguised as a song.",
  },
  {
    title: "Family Portrait",
    id: "u6qUXsBzg0k",
    zone: "Bloodline",
    note: "A framed memory that keeps changing when you blink.",
  },
  {
    title: "The Mom I Never Had",
    id: "0cPTQbgy6yU",
    zone: "Bloodline",
    note: "A soft fracture in the archive.",
  },
  {
    title: "Episode 5 - The Story So Far",
    id: "SoCCRWBl6Js",
    zone: "Error Sequence",
    note: "The dream catches itself narrating.",
  },
  {
    title: "Episode 4 - Break Out",
    id: "n0j12YqPvxY",
    zone: "Error Sequence",
    note: "The room realizes it has no walls.",
  },
  {
    title: "Episode 3 - Eviction Notice",
    id: "7SiQGztEspo",
    zone: "Error Sequence",
    note: "A notice slid under the door of reality.",
  },
  {
    title: "Episode 2 - Movies, Lies and War",
    id: "eKRg-2ryFc4",
    zone: "Error Sequence",
    note: "Truth rendered in damaged frames.",
  },
  {
    title: "Episode 1 - Fractured Horizons",
    id: "ulKKG9ILqXE",
    zone: "Error Sequence",
    note: "The first crack in the skyline.",
  },
  {
    title: "The Story So Far",
    id: "8_4ZxTQL7Uk",
    zone: "Error Sequence",
    note: "The archive folds the plot back into your hands.",
  },
  {
    title: "The Wheel",
    id: "iNjHqkeqPro",
    zone: "Archive",
    note: "A loop with a pulse.",
  },
  {
    title: "Redline Dreams",
    id: "myNbjVz5RbE",
    zone: "Lucid",
    note: "Speed, sleep, and warning lights.",
  },
  {
    title: "Escape Not Found",
    id: "A9MC8J0WfRQ",
    zone: "Archive",
    note: "The exit route returns an error.",
  },
  {
    title: "Agent in the Middle",
    id: "zsuGLCKi56I",
    zone: "Archive",
    note: "DEV caught between transmissions.",
  },
  {
    title: "Break Out",
    id: "p3r8fQ7SkK0",
    zone: "Error Sequence",
    note: "The lock starts hearing the song.",
  },
  {
    title: "Dial Up Diva",
    id: "qmKcBN-lAqw",
    zone: "Archive",
    note: "A neon call from an older modem dream.",
  },
  {
    title: "One Man Army",
    id: "SRaCKCnWpGM",
    zone: "Archive",
    note: "Solo resistance in a crowded signal.",
  },
  {
    title: "J. Orlando",
    id: "HaDqMIJ372o",
    zone: "Archive",
    note: "A name recovered from the file system.",
  },
  {
    title: "The Marionette's Waltz",
    id: "Yq0oQYQhIf4",
    zone: "Archive",
    note: "Strings, steps, and bad control systems.",
  },
  {
    title: "Cracks in the Pavement",
    id: "tYfNWMa8MU0",
    zone: "Archive",
    note: "The street remembers what the skyline forgot.",
  },
  {
    title: "Crimson Tide",
    id: "r-0mfF3UUoQ",
    zone: "Archive",
    note: "Red water rising inside the machine.",
  },
  {
    title: "Us vs. Them",
    id: "4w_WfXl_pbE",
    zone: "Archive",
    note: "A binary breaks into a chorus.",
  },
  {
    title: "Lucid Lies",
    id: "vXdr_pu9mg4",
    zone: "Lucid",
    note: "The dream edits itself mid-sentence.",
  },
  {
    title: "Pull The Plug",
    id: "6uOrPmM0gBg",
    zone: "Archive",
    note: "A hard reboot with teeth.",
  },
  {
    title: "Don't Blink",
    id: "9R3sYBrbsRY",
    zone: "Archive",
    note: "Every frame is a witness.",
  },
  {
    title: "Party Through Time",
    id: "c7kxOS2wh9Q",
    zone: "Archive",
    note: "Time stutters, then dances.",
  },
  {
    title: "Race Against Time",
    id: "VqVkf0COL1w",
    zone: "Archive",
    note: "A countdown in the bloodstream.",
  },
  {
    title: "Hello World",
    id: "00-_LcpNSWM",
    zone: "Archive",
    note: "The first boot screen of the DEV universe.",
  },
];

export const dreamStats = [
  { label: "Albums and playlists", value: albums.length.toString() },
  { label: "Music videos", value: videos.length.toString() },
  { label: "Official channel", value: "@DEV_Music_404" },
];
