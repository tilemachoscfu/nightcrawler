export interface ProjectLink { label: string; href: string }

export interface ProjectEntry {
  slug: string;
  name: string;
  description?: string;
  category?: "homelab" | "code" | "print" | "experiment" | "hardware";
  status?: "active" | "complete" | "prototype";
  links?: ProjectLink[];
}

export const projects: readonly ProjectEntry[] = [
  { slug: "homelab", name: "HOMELAB", description: "self-hosted infrastructure", category: "homelab", status: "active" },
  { slug: "6u-rack", name: "6U-RACK", description: "modular 3D printed server rack", category: "print", status: "prototype" },
  { slug: "network-tools", name: "NETWORK-TOOLS", description: "network monitoring and utilities", category: "code", status: "active" },
  { slug: "automation", name: "AUTOMATION", description: "scripts and internal tools", category: "code", status: "active" },
  { slug: "hardware-bench", name: "HARDWARE-BENCH", description: "small systems and component builds", category: "hardware", status: "prototype" },
  { slug: "experiments", name: "EXPERIMENTS", description: "experimental interfaces and systems", category: "experiment", status: "prototype" },
] as const;

export const codeProjects: readonly ProjectEntry[] = [
  { slug: "network-sentinel", name: "NETWORK SENTINEL", category: "code" },
  { slug: "automation-tools", name: "AUTOMATION TOOLS", category: "code" },
  { slug: "homelab-utilities", name: "HOMELAB UTILITIES", category: "code" },
  { slug: "experiments", name: "EXPERIMENTS", category: "experiment" },
] as const;
