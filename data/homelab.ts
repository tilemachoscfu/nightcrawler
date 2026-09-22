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
