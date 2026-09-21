import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { SectionShell } from "@/components/SectionShell";
import { codeProjects } from "@/data/projects";

export const metadata: Metadata = { title: "code" };

export default function CodePage() {
  return <SectionShell path="code"><ProjectList items={codeProjects} /></SectionShell>;
}
