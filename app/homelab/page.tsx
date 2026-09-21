import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";

export const metadata: Metadata = { title: "homelab" };

const hosts = ["lenovo-01", "hp-01"];
const services = ["docker", "jellyfin", "homepage", "uptime-kuma", "beszel", "dozzle", "paperless"];

export default function HomelabPage() {
  return (
    <SectionShell path="homelab">
      <div className="space-y-12">
        <TerminalGroup title="HOSTS" items={hosts} />
        <TerminalGroup title="SERVICES" items={services} />
      </div>
      <p className="mt-12 text-xs text-[#555553]">demo inventory / replace in app/homelab/page.tsx</p>
    </SectionShell>
  );
}

function TerminalGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-labelledby={title.toLowerCase()}>
      <h1 id={title.toLowerCase()} className="mb-4 text-sm tracking-[0.12em] text-[var(--muted)]">{title}</h1>
      <ul className="space-y-1">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
