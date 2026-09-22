export interface HomelabHost {
  name: string;
  system: string;
  role: string;
  hardware?: string;
}

export interface ServiceGroup {
  title: string;
  items: readonly string[];
}

export interface ArchitectureFlow {
  label: string;
  nodes: readonly string[];
}

export const homelabOverview =
  "A two-node self-hosted environment built around Linux and Docker Compose. It combines media services, storage automation, private networking, monitoring and documented operations while keeping credentials and live configuration private.";

export const homelabHosts: readonly HomelabHost[] = [
  {
    name: "hp-01",
    system: "Linux Mint 22.3",
    role: "media / storage / automation",
    hardware: "Ryzen 3 / 11 GB RAM / 2 TB data",
  },
  {
    name: "lenovo-01",
    system: "Ubuntu 26.04",
    role: "services / proxy / monitoring",
  },
] as const;

export const serviceGroups: readonly ServiceGroup[] = [
  { title: "CORE", items: ["Docker", "AdGuard Home", "Nginx Proxy Manager"] },
  { title: "MEDIA", items: ["Jellyfin", "Navidrome", "Kiwix", "Jellyseerr"] },
  { title: "AUTOMATION", items: ["Radarr", "Sonarr", "Lidarr", "Prowlarr", "Bazarr"] },
  { title: "OPERATIONS", items: ["Homepage", "Portainer", "Uptime Kuma", "Netdata", "Paperless-ngx", "Vaultwarden"] },
] as const;

export const architectureFlows: readonly ArchitectureFlow[] = [
  { label: "ACCESS", nodes: ["LAN", "AdGuard Home", "Nginx Proxy Manager", "services"] },
  { label: "MEDIA", nodes: ["Jellyseerr", "Sonarr / Radarr", "Prowlarr", "qBittorrent", "Jellyfin"] },
  { label: "MUSIC", nodes: ["Lidarr", "Soularr / slskd", "Navidrome"] },
  { label: "REMOTE", nodes: ["remote client", "Tailscale", "homelab"] },
] as const;

export const operationNotes = [
  "Sanitized Docker Compose templates separated from private runtime configuration",
  "Allowlisted export workflow with local and GitHub Actions validation",
  "Health, container and disk monitoring across both nodes",
  "Nightly maintenance coordinated with backup locks",
] as const;

export const securityNotes = [
  "Download traffic isolated behind Gluetun and AirVPN",
  "Automated secret scanning blocks unsafe repository updates",
  "Storage mount guards prevent services from using an unexpected volume",
  "Credentials, databases, logs and private host details stay outside the public repository",
] as const;

export const homelabStack = [
  "Linux Mint",
  "Ubuntu",
  "Docker Compose",
  "Shell",
  "Python",
  "Tailscale",
  "Nginx Proxy Manager",
  "GitHub Actions",
] as const;
