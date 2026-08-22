export type DoorId = "home" | "music" | "videos" | "about";

export type NavRoom = {
  id: DoorId;
  title: string;
  href: string;
  subtitle: string;
};

export type SceneImage = {
  id: string;
  title: string;
  src: string;
  tone: string;
};

export type Album = {
  title: string;
  id: string;
  tracks: string;
  era: string;
  note: string;
  image: string;
};

export type VideoZone =
  | "New Signal"
  | "Lucid Dreams"
  | "Gate Keepers"
  | "Error Sequence"
  | "Bloodline"
  | "Archive";

export type Video = {
  title: string;
  id: string;
  zone: VideoZone;
  meta: string;
  note: string;
};

export const navRooms: NavRoom[] = [
  { id: "home", title: "Home", href: "/", subtitle: "Signal entry" },
  { id: "music", title: "Music", href: "/music", subtitle: "Official albums" },
  { id: "videos", title: "Videos", href: "/videos", subtitle: "Visual archive" },
  { id: "about", title: "About", href: "/about", subtitle: "DEV file" },
];

export const sceneImages: SceneImage[] = [
  {
    id: "grave",
    title: "Gate Keepers",
    src: "/dev404/gatekeepers-grave.png",
    tone: "Rain, masks, grave-light, and blue electricity.",
  },
  {
    id: "bridge",
    title: "Love on a Leash",
    src: "/dev404/leash-bridge.png",
    tone: "A chained heart bridge suspended in black static.",
  },
  {
    id: "room",
    title: "3:17 Room",
    src: "/dev404/lucid-room.png",
    tone: "The lucid bedroom before the walls become code.",
  },
  {
    id: "fall",
    title: "Gravity Error",
    src: "/dev404/lucid-fall.png",
    tone: "Furniture, glass, and memory falling sideways.",
  },
  {
    id: "duel",
    title: "Mirror Stage",
    src: "/dev404/lucid-duel.png",
    tone: "Two voices shouting inside the same broken dream.",
  },
  {
    id: "crowd",
    title: "Signal Crowd",
    src: "/dev404/lucid-crowd.png",
    tone: "Clocks, doors, and duplicate DEV shadows.",
  },
  {
    id: "hall",
    title: "Endless Hall",
    src: "/dev404/lucid-hall.png",
    tone: "A wet corridor where every object waits to move.",
  },
];

export const albums: Album[] = [
  {
    title: "Gate Keepers",
    id: "OLAK5uy_miz4J2_gqMMhFXhapXzD3OHN1mEWd-WaY",
    tracks: "4 tracks",
    era: "Latest gate",
    note: "A compact official release with black rain, graveyard pressure, and the red-tie DEV silhouette.",
    image: "/dev404/gatekeepers-grave.png",
  },
  {
    title: "LUCID DREAMS",
    id: "OLAK5uy_noN2bhedpcNRpeYLL-mXgCZskcnUPxWlo",
    tracks: "7 tracks",
    era: "Dream fracture",
    note: "The room breaks open, clocks repeat, and the artist keeps waking up inside the wrong frame.",
    image: "/dev404/lucid-hall.png",
  },
  {
    title: "After The Old Name",
    id: "OLAK5uy_l4-M_vySYNsmiggO-LoPihdCGxJD5q-xY",
    tracks: "12 tracks",
    era: "Identity reboot",
    note: "A longer official release about stepping out of the old label and into the DEV 404 signal.",
    image: "/dev404/lucid-crowd.png",
  },
  {
    title: "Eviction Notice",
    id: "OLAK5uy_n8N6IhYlXR1TxENYYfCTTjW37StN7sHSI",
    tracks: "9 tracks",
    era: "Red paper",
    note: "Reality receives the warning in writing, but the hallway keeps changing the address.",
    image: "/dev404/lucid-fall.png",
  },
  {
    title: "Movies, Lies, and War",
    id: "OLAK5uy_lZ-WxdDVUHWZlbYHoUMR26Wg53MiBuBFw",
    tracks: "10 tracks",
    era: "Propaganda dream",
    note: "Cinema, conflict, and false memory cut together like corrupted film.",
    image: "/dev404/leash-bridge.png",
  },
  {
    title: "Hello, World!",
    id: "OLAK5uy_l5VwiQtYvUpLvL9eC1qym-mN5oAC_hgo0",
    tracks: "12 tracks",
    era: "First boot",
    note: "The official origin release: the machine wakes up and says DEV's name back.",
    image: "/dev404/lucid-room.png",
  },
  {
    title: "BROKEN",
    id: "OLAK5uy_mgbjUkaeNGAw52C-6PSWgUJ_cYoJp4skI",
    tracks: "10 tracks",
    era: "Fracture",
    note: "A damaged system with light leaking through every crack in the file.",
    image: "/dev404/lucid-duel.png",
  },
  {
    title: "What Family?",
    id: "OLAK5uy_nq8TYYdj5G2IeiUfNbBMOHsewwHxdzz9Q",
    tracks: "5 tracks",
    era: "Bloodline static",
    note: "Family memory treated as evidence, warning, and ghost signal.",
    image: "/dev404/leash-bridge.png",
  },
  {
    title: "Fractured Horizons",
    id: "OLAK5uy_lmoQYJESA48WHw3qtZewMeNgPrDHqYDms",
    tracks: "5 tracks",
    era: "Skyline split",
    note: "The first crack in the horizon becomes a map for the whole DEV 404 world.",
    image: "/dev404/gatekeepers-grave.png",
  },
  {
    title: "Rivers Run Backward",
    id: "OLAK5uy_nP63FbKlRbRJWN38T8kxKNnooziv3RlYc",
    tracks: "1 track",
    era: "Reverse current",
    note: "A single-track release drifting against time.",
    image: "/dev404/lucid-hall.png",
  },
  {
    title: "The Story So Far",
    id: "OLAK5uy_k3xhbhOiI_x2BiH5zQ4zq8wO0x6fBicO0",
    tracks: "3 tracks",
    era: "Recap signal",
    note: "A short official release that folds the plot back through the archive.",
    image: "/dev404/lucid-crowd.png",
  },
  {
    title: "28:06:42:12",
    id: "OLAK5uy_kXdFCdAasv0pYeIwWgzAqsa__2SGD2zL8",
    tracks: "1 track",
    era: "Countdown",
    note: "A lone transmission marked like a timer nobody should have found.",
    image: "/dev404/lucid-room.png",
  },
];

export const videos: Video[] = [
  { id: "DGX8xh6zOVc", title: "GateKeepers", zone: "New Signal", meta: "14 hours ago", note: "The newest official transmission opens the gate." },
  { id: "S-YtBZ19jqE", title: "LUCID DREAMS", zone: "Lucid Dreams", meta: "5 days ago", note: "The dream room becomes the main breach." },
  { id: "jdoeXD9jZ3g", title: "Blood Isn't BluePrint", zone: "Bloodline", meta: "2 months ago", note: "Inheritance turns into damaged code." },
  { id: "3BfuQUZDM3M", title: "Never", zone: "Bloodline", meta: "2 months ago", note: "A refusal loop with teeth." },
  { id: "u6qUXsBzg0k", title: "Family Portrait", zone: "Bloodline", meta: "3 months ago", note: "A framed memory that keeps changing." },
  { id: "0cPTQbgy6yU", title: "The Mom I Never Had", zone: "Bloodline", meta: "3 months ago", note: "The archive lowers its voice." },
  { id: "SoCCRWBl6Js", title: "Episode 5 - The Story So Far", zone: "Error Sequence", meta: "3 months ago", note: "The dream catches itself narrating." },
  { id: "n0j12YqPvxY", title: "Episode 4 - Break Out", zone: "Error Sequence", meta: "3 months ago", note: "The room realizes it has no walls." },
  { id: "7SiQGztEspo", title: "Episode 3 - Eviction Notice", zone: "Error Sequence", meta: "3 months ago", note: "A notice slid under reality's door." },
  { id: "eKRg-2ryFc4", title: "Episode 2 - Movies, Lies and War", zone: "Error Sequence", meta: "3 months ago", note: "Truth rendered in damaged frames." },
  { id: "ulKKG9ILqXE", title: "Episode 1 - Fractured Horizons", zone: "Error Sequence", meta: "3 months ago", note: "The first crack in the skyline." },
  { id: "8_4ZxTQL7Uk", title: "The Story So Far", zone: "Error Sequence", meta: "3 months ago", note: "The plot folds back into your hands." },
  { id: "iNjHqkeqPro", title: "The Wheel", zone: "Archive", meta: "3 months ago", note: "A loop with a pulse." },
  { id: "myNbjVz5RbE", title: "Redline Dreams", zone: "Lucid Dreams", meta: "3 months ago", note: "Speed, sleep, and warning lights." },
  { id: "A9MC8J0WfRQ", title: "Escape Not Found", zone: "Archive", meta: "6 months ago", note: "The exit route returns an error." },
  { id: "zsuGLCKi56I", title: "Agent in the Middle", zone: "Archive", meta: "6 months ago", note: "DEV caught between transmissions." },
  { id: "p3r8fQ7SkK0", title: "Break Out", zone: "Error Sequence", meta: "6 months ago", note: "The lock starts hearing the song." },
  { id: "qmKcBN-lAqw", title: "Dial Up Diva", zone: "Archive", meta: "7 months ago", note: "A neon call from an older modem dream." },
  { id: "SRaCKCnWpGM", title: "One Man Army", zone: "Archive", meta: "7 months ago", note: "Solo resistance in a crowded signal." },
  { id: "HaDqMIJ372o", title: "J. Orlando", zone: "Archive", meta: "8 months ago", note: "A name recovered from the system." },
  { id: "Yq0oQYQhIf4", title: "The Marionette's Waltz", zone: "Archive", meta: "10 months ago", note: "Strings, steps, and bad control." },
  { id: "tYfNWMa8MU0", title: "Cracks in the Pavement", zone: "Archive", meta: "10 months ago", note: "The street remembers what the skyline forgot." },
  { id: "r-0mfF3UUoQ", title: "Crimson Tide", zone: "Archive", meta: "10 months ago", note: "Red water rising inside the machine." },
  { id: "4w_WfXl_pbE", title: "Us vs. Them", zone: "Archive", meta: "10 months ago", note: "A binary breaks into a chorus." },
  { id: "vXdr_pu9mg4", title: "Lucid Lies", zone: "Lucid Dreams", meta: "11 months ago", note: "The dream edits itself mid-sentence." },
  { id: "6uOrPmM0gBg", title: "Pull The Plug", zone: "Archive", meta: "1 year ago", note: "A hard reboot with voltage." },
  { id: "UpsRR96Ibxk", title: "Lucid Lies", zone: "Lucid Dreams", meta: "1 year ago", note: "An earlier mirror of the same fracture." },
  { id: "9R3sYBrbsRY", title: "Don't Blink", zone: "Archive", meta: "1 year ago", note: "Every frame is a witness." },
  { id: "c7kxOS2wh9Q", title: "Party Through Time", zone: "Archive", meta: "1 year ago", note: "Time stutters, then dances." },
  { id: "VqVkf0COL1w", title: "Race Against Time", zone: "Archive", meta: "1 year ago", note: "A countdown in the bloodstream." },
  { id: "00-_LcpNSWM", title: "Hello World", zone: "Archive", meta: "1 year ago", note: "The first boot screen of the DEV universe." },
  { id: "nGgCw4msDG8", title: "28:06:42:12", zone: "Archive", meta: "1 year ago", note: "The timer arrives before the reason." },
  { id: "q6fnoT1EzB0", title: "Yoda - Breadcrumbs in the Static", zone: "Archive", meta: "1 year ago", note: "A clue trail buried in distortion." },
  { id: "VX8orrpoGVc", title: "DEV 404 - Breadcrumbs In The Static", zone: "Archive", meta: "1 year ago", note: "The static starts leaving instructions." },
  { id: "PTG5f5pc_tY", title: "DEV 404 - Don't Let Me Close My Eyes", zone: "Archive", meta: "1 year ago", note: "Sleep becomes the wrong kind of door." },
  { id: "4mbQvgkJ53s", title: "DEV 404 - Lucid Lies", zone: "Lucid Dreams", meta: "1 year ago", note: "A deeper version of the dream lie." },
  { id: "szuMdzyHrWk", title: "Heirloom Of Fire", zone: "Archive", meta: "1 year ago", note: "A family object that refuses to cool." },
  { id: "dcxQ-IcGFfo", title: "The Strings I Never Chose", zone: "Archive", meta: "1 year ago", note: "Control systems disguised as inheritance." },
  { id: "wf-Ca7bXudw", title: "Cell Block Ghost", zone: "Archive", meta: "1 year ago", note: "A locked room with a voice still inside." },
];

export const sourceLinks = {
  videos: "https://www.youtube.com/@DEV_Music_404/videos",
  releases: "https://www.youtube.com/@DEV_Music_404/releases",
  home: "https://dev-404.com/",
};
