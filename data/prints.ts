import type { ProjectEntry } from "./projects";

export interface PrintSettings {
  material?: string;
  layerHeight?: string;
  infill?: string;
  supports?: boolean;
}

export interface PrintProject extends ProjectEntry {
  category: "print";
  stlUrl?: string;
  imageUrls?: string[];
  printSettings?: PrintSettings;
}

export const printProjects: readonly PrintProject[] = [
  { slug: "6u-server-rack", name: "6U SERVER RACK", category: "print", status: "prototype" },
  { slug: "hdd-mount", name: "HDD MOUNT", category: "print" },
  { slug: "iphone-rack-display", name: "IPHONE RACK DISPLAY", category: "print" },
  { slug: "cable-management", name: "CABLE MANAGEMENT", category: "print" },
  { slug: "custom-hardware", name: "CUSTOM HARDWARE", category: "print" },
] as const;
