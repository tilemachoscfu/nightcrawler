import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import { homelabHosts, serviceGroups } from "@/data/homelab";

export const metadata: Metadata = { title: "homelab" };

export default function HomelabPage() {
  return (
    <SectionShell path="homelab">
      <div className="space-y-14">
        <section aria-labelledby="hosts">
          <h1 id="hosts" className="mb-4 text-sm tracking-[0.12em] text-[var(--muted)]">HOSTS</h1>
          <ul className="homelab-hosts">
            {homelabHosts.map((host) => (
              <li key={host.name}>
                <p>{host.name}</p>
                <p>{host.system} / {host.role}</p>
                {host.hardware ? <p>{host.hardware}</p> : null}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="services">
          <h2 id="services" className="mb-4 text-sm tracking-[0.12em] text-[var(--muted)]">SERVICES</h2>
          <div className="service-groups">
            {serviceGroups.map((group) => <TerminalGroup key={group.title} title={group.title} items={group.items} />)}
          </div>
        </section>
      </div>
      <p className="mt-12 text-xs text-[#555553]">public summary / no private network details</p>
    </SectionShell>
  );
}

function TerminalGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section aria-labelledby={title.toLowerCase()}>
      <h3 id={title.toLowerCase()}>{title}</h3>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
