import { codeProjects, projects } from "./projects";
import { printProjects } from "./prints";

export interface NavigationItem {
  index: string;
  label: string;
  shortLabel: string;
  href: string;
  glyph: string;
  description: string;
  meta: string;
  status?: "online";
}

export const navigationItems: readonly NavigationItem[] = [
  {
    index: "01",
    label: "Projects",
    shortLabel: "projects",
    href: "/projects",
    glyph: "[]",
    description: "selected builds & experiments",
    meta: `${String(projects.length).padStart(2, "0")} entries`,
  },
  {
    index: "02",
    label: "3D Printing",
    shortLabel: "prints",
    href: "/3d-printing",
    glyph: "3D",
    description: "racks, mounts & physical systems",
    meta: `${String(printProjects.length).padStart(2, "0")} models`,
  },
  {
    index: "03",
    label: "Homelab",
    shortLabel: "homelab",
    href: "/homelab",
    glyph: "::",
    description: "hosts, services & infrastructure",
    meta: "02 hosts",
    status: "online",
  },
  {
    index: "04",
    label: "Code",
    shortLabel: "code",
    href: "/code",
    glyph: "{}",
    description: "utilities, automation & network tools",
    meta: `${String(codeProjects.length).padStart(2, "0")} projects`,
  },
  {
    index: "05",
    label: "About",
    shortLabel: "about",
    href: "/about",
    glyph: "@",
    description: "identity, focus & location",
    meta: "athens / gr",
  },
] as const;
