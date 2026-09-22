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
  creator?: string;
  overview?: string;
  specifications?: readonly { label: string; value: string }[];
  features?: readonly string[];
}

export const printProjects: readonly PrintProject[] = [
  {
    slug: "3d-printed-homelab",
    name: "3D PRINTED HOMELAB",
    description: "modular printed rack for homelab hardware",
    category: "print",
    status: "complete",
    details: ["10-inch format", "modular frame", "200 mm depth"],
    imageUrls: ["/images/3d-printed-homelab.jpg"],
    links: [{ label: "printables", href: "https://www.printables.com/model/1225275-modular-10-server-rack-mod10" }],
    creator: "MandicReally",
    overview: "A compact, fully 3D-printable rack system built to keep homelab and networking hardware organized without the size of a conventional server cabinet.",
    specifications: [
      { label: "FORMAT", value: "standard 10-inch rack hardware" },
      { label: "DEPTH", value: "200 mm / flange to flange" },
      { label: "SYSTEM", value: "modular 4U–8U configuration" },
      { label: "PRINT", value: "support-free parts / common bed sizes" },
    ],
    features: [
      "Expandable frame using additional middle sections",
      "Compatible with keystone panels, blanking plates and custom mounts",
      "Optional handles, fan mounts and open side panels",
      "M6 hardware support for a straightforward mechanical assembly",
    ],
  },
] as const;
