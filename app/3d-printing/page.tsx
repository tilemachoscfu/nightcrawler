import type { Metadata } from "next";
import Image from "next/image";
import { ProjectList } from "@/components/ProjectList";
import { SectionShell } from "@/components/SectionShell";
import { printProjects } from "@/data/prints";

export const metadata: Metadata = { title: "3d-printing" };

export default function PrintingPage() {
  return (
    <SectionShell path="3d-printing">
      <figure className="print-hero">
        <Image
          src="/images/3d-printed-homelab.jpg"
          alt="Modular 3D printed homelab rack with handles and mounted panels"
          width={1200}
          height={1600}
          sizes="(max-width: 640px) calc(100vw - 2rem), 44rem"
          unoptimized
        />
        <figcaption>01 / PHYSICAL BUILD</figcaption>
      </figure>
      <ProjectList items={printProjects} />
    </SectionShell>
  );
}
