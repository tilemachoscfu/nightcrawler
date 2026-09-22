import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import {
  storageChecks,
  storageFlows,
  storageGuarantees,
  storageOverview,
  storageStack,
  storageSystems,
} from "@/data/storage";

export const metadata: Metadata = {
  title: "storage-automation",
  description: "Media storage integration, migration safeguards and container automation.",
};

export default function StorageAutomationPage() {
  return (
    <SectionShell path="storage-automation">
      <article className="storage-project">
        <header className="storage-intro">
          <p className="storage-kicker"><i /> 03 / DEPLOYED AUTOMATION</p>
          <h1>STORAGE<br />AUTOMATION</h1>
          <p>{storageOverview}</p>
          <div className="storage-status-line">
            <span>VOLUME / 2 TB</span>
            <span>FILESYSTEM / EXT4</span>
            <span>VPN / GLUETUN + AIRVPN</span>
            <span>MODE / FAIL-CLOSED</span>
          </div>
          <a
            className="storage-repo-link"
            href="https://github.com/tilemachoscfu/storage-automation"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">↗</span> view source on github
          </a>
        </header>

        <section className="storage-section" aria-labelledby="storage-flow">
          <div className="storage-section-heading">
            <h2 id="storage-flow">INTEGRATION FLOW</h2>
            <span>service → storage → library</span>
          </div>
          <ol className="storage-flows">
            {storageFlows.map((flow, index) => (
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

        <section className="storage-section" aria-labelledby="systems">
          <div className="storage-section-heading">
            <h2 id="systems">CONNECTED SYSTEMS</h2>
            <span>12 services</span>
          </div>
          <div className="storage-systems">
            {storageSystems.map((group) => (
              <section key={group.title} aria-labelledby={`storage-${group.title.toLowerCase()}`}>
                <h3 id={`storage-${group.title.toLowerCase()}`}>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section className="storage-guard" aria-labelledby="mount-guard">
          <div>
            <p>SAFETY GATE / 01</p>
            <h2 id="mount-guard">STORAGE MOUNT GUARD</h2>
          </div>
          <p>
            Before a protected container starts, a shared wrapper validates a marker on the expected volume.
            If the volume is absent or incorrect, the service is stopped before it can write into the underlying system disk.
          </p>
          <span><i /> fail-closed</span>
        </section>

        <div className="storage-grid">
          <section className="storage-section storage-guarantees" aria-labelledby="migration-rules">
            <div className="storage-section-heading"><h2 id="migration-rules">MIGRATION RULES</h2></div>
            <ul>
              {storageGuarantees.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </section>

          <section className="storage-section storage-verification" aria-labelledby="verification">
            <div className="storage-section-heading"><h2 id="verification">VERIFICATION</h2></div>
            <dl>
              {storageChecks.map((check) => (
                <div key={check.name}>
                  <dt>{check.name}</dt>
                  <dd><i />{check.result}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="storage-section" aria-labelledby="storage-stack">
          <div className="storage-section-heading"><h2 id="storage-stack">STACK</h2><span>core tools</span></div>
          <ul className="storage-stack">{storageStack.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <p className="storage-public-note">public project summary / volume identifiers and private paths excluded</p>
      </article>
    </SectionShell>
  );
}
