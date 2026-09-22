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
  {
    slug: "3d-printed-homelab",
    name: "3D PRINTED HOMELAB",
    description: "modular printed rack for homelab hardware",
    category: "print",
    status: "complete",
    details: ["modular rack", "printed panels", "hardware mounted"],
    imageUrls: ["/images/3d-printed-homelab.jpg"],
  },
] as const;
