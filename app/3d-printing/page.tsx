import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { SectionShell } from "@/components/SectionShell";
import { printProjects } from "@/data/prints";

export const metadata: Metadata = { title: "3d-printing" };

export default function PrintingPage() {
  return <SectionShell path="3d-printing"><ProjectList items={printProjects} /></SectionShell>;
}
