export interface StorageFlow {
  label: string;
  nodes: readonly string[];
}

export interface StorageCheck {
  name: string;
  result: string;
}

export const storageOverview =
  "Automation and migration tooling for a containerized media stack. It routes new downloads and libraries to dedicated storage, preserves existing data paths and verifies that every connected service sees the same filesystem safely.";

export const storageFlows: readonly StorageFlow[] = [
  { label: "VIDEO", nodes: ["Jellyseerr", "Sonarr / Radarr", "qBittorrent", "dedicated storage", "Jellyfin"] },
  { label: "MUSIC", nodes: ["Lidarr", "Soularr / slskd", "dedicated storage", "Navidrome"] },
  { label: "STARTUP", nodes: ["container start", "mount guard", "volume marker", "service entrypoint"] },
] as const;

export const storageSystems = [
  { title: "ACQUISITION", items: ["qBittorrent", "Sonarr", "Radarr", "Lidarr", "slskd", "Soularr"] },
  { title: "LIBRARIES", items: ["Jellyfin", "Navidrome", "Jellyseerr", "Bazarr"] },
] as const;

export const storageGuarantees = [
  "Existing torrent locations and media-library roots remain unchanged",
  "New content can use the dedicated storage without forcing a bulk migration",
  "Hardlinks are verified inside the relevant containers on the same filesystem",
  "Media players receive read-only access while writing is limited to services that require it",
  "A mount marker prevents startup against an empty system-disk directory",
  "Configuration snapshots are created before integration changes",
] as const;

export const storageChecks: readonly StorageCheck[] = [
  { name: "CONTAINER MOUNTS", result: "verified" },
  { name: "ARR CONNECTIONS", result: "passed" },
  { name: "READ / WRITE", result: "passed" },
  { name: "HARDLINKS", result: "passed" },
  { name: "MISSING VOLUME", result: "rejected" },
  { name: "PREVIOUS PATHS", result: "preserved" },
] as const;

export const storageStack = [
  "Python",
  "Linux",
  "Docker Compose",
  "ext4",
  "Arr stack",
  "qBittorrent",
  "Jellyfin",
  "Navidrome",
] as const;
