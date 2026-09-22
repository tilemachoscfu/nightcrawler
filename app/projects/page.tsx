import type { Metadata } from "next";
import { FilteredProjectList } from "@/components/FilteredProjectList";
import { SectionShell } from "@/components/SectionShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "projects" };

export default function ProjectsPage() {
  return <SectionShell path="projects"><FilteredProjectList items={projects} /></SectionShell>;
}
