export interface ProjectLink { label: string; href: string }

export interface ProjectEntry {
  slug: string;
  name: string;
  description?: string;
  category?: "homelab" | "code" | "print" | "experiment" | "hardware";
  status?: "active" | "complete" | "prototype";
  details?: readonly string[];
  links?: ProjectLink[];
}

export const projects: readonly ProjectEntry[] = [
  {
    slug: "homelab-infrastructure",
    name: "HOMELAB INFRASTRUCTURE",
    description: "two-node Docker homelab and self-hosted services",
    category: "homelab",
    status: "active",
    details: ["Linux", "Docker Compose", "monitoring"],
    links: [{ label: "github", href: "https://github.com/tilemachoscfu/homelab-infrastructure" }],
  },
  {
    slug: "3d-printed-homelab",
    name: "3D PRINTED HOMELAB",
    description: "modular printed rack for homelab hardware",
    category: "print",
    status: "complete",
    details: ["10-inch format", "modular frame", "200 mm depth"],
    links: [{ label: "printables", href: "https://www.printables.com/model/1225275-modular-10-server-rack-mod10" }],
  },
  {
    slug: "privacy-center",
    name: "PRIVACY CENTER",
    description: "local-first digital footprint audit toolkit",
    category: "code",
    status: "active",
    details: ["Python", "local dashboard", "passive audit"],
  },
  {
    slug: "storage-automation",
    name: "STORAGE AUTOMATION",
    description: "media library and storage integration tooling",
    category: "code",
    status: "active",
    details: ["Python", "Arr stack", "media services"],
  },
] as const;

export const codeProjects: readonly ProjectEntry[] = [
  {
    slug: "homelab-infrastructure",
    name: "HOMELAB INFRASTRUCTURE",
    description: "reproducible Docker Compose infrastructure",
    category: "code",
    status: "active",
    details: ["Shell", "Docker Compose", "operations docs"],
    links: [{ label: "github", href: "https://github.com/tilemachoscfu/homelab-infrastructure" }],
  },
  {
    slug: "privacy-center",
    name: "PRIVACY CENTER",
    description: "privacy audits, metadata cleanup and local reports",
    category: "code",
    status: "active",
    details: ["Python", "local-first", "passive"],
  },
  {
    slug: "storage-automation",
    name: "STORAGE AUTOMATION",
    description: "media storage migration and service integration",
    category: "code",
    status: "active",
    details: ["Python", "Arr stack", "Jellyfin"],
  },
  {
    slug: "hardening-toolkit",
    name: "HARDENING TOOLKIT",
    description: "firewall, DNS, SSH and inventory utilities",
    category: "code",
    status: "active",
    details: ["Shell", "Python", "Linux"],
  },
] as const;
