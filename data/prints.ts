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
    slug: "i8-dock-02",
    name: "I8 / DOCK-02",
    description: "parametric 2U cradle for a bare iPhone 8",
    category: "print",
    status: "prototype",
    details: ["PETG", "0.20 mm", "35% infill", "no supports"],
    printSettings: { material: "PETG", layerHeight: "0.20 mm", infill: "35%", supports: false },
  },
  {
    slug: "measuring-jug-one-piece",
    name: "MEASURING JUG / ONE-PIECE",
    description: "one-piece parametric 295 ml measuring vessel",
    category: "print",
    status: "prototype",
    details: ["PLA / PETG", "0.20 mm", "35% infill", "handle supports"],
    printSettings: { material: "PLA / PETG", layerHeight: "0.20 mm", infill: "35%", supports: true },
  },
  {
    slug: "measuring-jug-modular",
    name: "MEASURING JUG / MODULAR",
    description: "separate body and M3-mounted handle",
    category: "print",
    status: "prototype",
    details: ["PLA / PETG", "0.20 mm", "30–40% infill", "no supports"],
    printSettings: { material: "PLA / PETG", layerHeight: "0.20 mm", infill: "30–40%", supports: false },
  },
  {
    slug: "printable-dragon",
    name: "PRINTABLE DRAGON",
    description: "procedural 120 mm printable model",
    category: "print",
    status: "prototype",
    details: ["Python generated", "STL", "120 mm"],
  },
] as const;
