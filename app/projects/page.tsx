import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { SectionShell } from "@/components/SectionShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "projects" };

export default function ProjectsPage() {
  return <SectionShell path="projects"><ProjectList items={projects} /></SectionShell>;
}
