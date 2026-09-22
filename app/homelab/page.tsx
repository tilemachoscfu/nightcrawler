import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import {
  architectureFlows,
  homelabHosts,
  homelabOverview,
  homelabStack,
  operationNotes,
  securityNotes,
  serviceGroups,
} from "@/data/homelab";

export const metadata: Metadata = {
  title: "homelab",
  description: "Two-node Linux and Docker Compose homelab infrastructure.",
};

export default function HomelabPage() {
  return (
    <SectionShell path="homelab">
      <article className="homelab-project">
        <header className="homelab-intro">
          <p className="homelab-kicker"><i /> 01 / ACTIVE INFRASTRUCTURE</p>
          <h1>HOMELAB<br />INFRASTRUCTURE</h1>
          <p>{homelabOverview}</p>
          <a
            className="homelab-repo-link"
            href="https://github.com/tilemachoscfu/homelab-infrastructure"
            target="_blank"
            rel="noreferrer"
          >
            <span>&gt;</span> github / homelab-infrastructure ↗
          </a>
        </header>

        <section className="homelab-section" aria-labelledby="hosts">
          <div className="homelab-section-heading">
            <h2 id="hosts">HOSTS</h2>
            <span>02 nodes</span>
          </div>
          <ul className="homelab-hosts">
            {homelabHosts.map((host) => (
              <li key={host.name}>
                <p><i />{host.name}</p>
                <p><span>SYSTEM</span>{host.system}</p>
                <p><span>ROLE</span>{host.role}</p>
                {host.hardware ? <p><span>HARDWARE</span>{host.hardware}</p> : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="homelab-section" aria-labelledby="architecture">
          <div className="homelab-section-heading">
            <h2 id="architecture">ARCHITECTURE</h2>
            <span>request flows</span>
          </div>
          <ol className="homelab-flows">
            {architectureFlows.map((flow, index) => (
              <li key={flow.label}>
                <span>{String(index + 1).padStart(2, "0")} / {flow.label}</span>
                <div>
                  {flow.nodes.map((node, nodeIndex) => (
                    <span key={node}>{nodeIndex > 0 ? <i aria-hidden="true">→</i> : null}{node}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="homelab-section" aria-labelledby="services">
          <div className="homelab-section-heading">
            <h2 id="services">SERVICES</h2>
            <span>public service map</span>
          </div>
          <div className="service-groups">
            {serviceGroups.map((group) => <TerminalGroup key={group.title} title={group.title} items={group.items} />)}
          </div>
        </section>

        <div className="homelab-notes-grid">
          <NoteSection id="operations" title="OPERATIONS" items={operationNotes} />
          <NoteSection id="security-model" title="SECURITY MODEL" items={securityNotes} />
        </div>

        <section className="homelab-section" aria-labelledby="stack">
          <div className="homelab-section-heading">
            <h2 id="stack">STACK</h2>
            <span>core tools</span>
          </div>
          <ul className="homelab-stack">
            {homelabStack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <p className="homelab-public-note">public summary / private network details excluded</p>
      </article>
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

function NoteSection({ id, title, items }: { id: string; title: string; items: readonly string[] }) {
  return (
    <section className="homelab-section homelab-note-section" aria-labelledby={id}>
      <div className="homelab-section-heading"><h2 id={id}>{title}</h2></div>
      <ul>{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
    </section>
  );
}
