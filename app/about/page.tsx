import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";

export const metadata: Metadata = { title: "about" };

export default function AboutPage() {
  return (
    <SectionShell path="about">
      <section aria-labelledby="about-title" className="max-w-xl">
        <h1 id="about-title" className="text-xl font-medium tracking-[0.08em] sm:text-2xl">NIGHTCRAWLER</h1>
        <p className="mt-8 text-[var(--muted)]">developer / maker</p>
        <p className="mt-3 leading-7 text-[var(--muted-bright)]">building software, infrastructure<br />and physical systems.</p>
        <p className="mt-10 text-[var(--muted)]">Athens, GR</p>
      </section>
    </SectionShell>
  );
}
