import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import {
  privacyCapabilities,
  privacyFlow,
  privacyGuarantees,
  privacyOverview,
  privacyStack,
  supportedFormats,
} from "@/data/privacy";

export const metadata: Metadata = {
  title: "privacy-center",
  description: "Local-first privacy auditing, metadata inspection and private reporting toolkit.",
};

export default function PrivacyCenterPage() {
  return (
    <SectionShell path="privacy-center">
      <article className="privacy-project">
        <header className="privacy-intro">
          <p className="privacy-kicker"><i /> 03 / LOCAL-FIRST TOOLING</p>
          <h1>PRIVACY<br />CENTER</h1>
          <p>{privacyOverview}</p>
          <div className="privacy-status-line">
            <span>MODE / PASSIVE</span>
            <span>STORAGE / LOCAL</span>
            <span>STATUS / ACTIVE</span>
          </div>
          <a
            className="privacy-repo-link"
            href="https://github.com/tilemachoscfu/privacy-center"
            target="_blank"
            rel="noreferrer"
          >
            <span>&gt;</span> github / privacy-center ↗
          </a>
        </header>

        <section className="privacy-section" aria-labelledby="capabilities">
          <div className="privacy-section-heading">
            <h2 id="capabilities">CAPABILITIES</h2>
            <span>{String(privacyCapabilities.length).padStart(2, "0")} commands</span>
          </div>
          <ol className="privacy-capabilities">
            {privacyCapabilities.map((capability, index) => (
              <li key={capability.command}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{capability.name}</p>
                  <code>privacy-audit {capability.command}</code>
                  <p>{capability.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="privacy-section" aria-labelledby="data-flow">
          <div className="privacy-section-heading">
            <h2 id="data-flow">DATA FLOW</h2>
            <span>local processing</span>
          </div>
          <ol className="privacy-flow">
            {privacyFlow.map((node, index) => (
              <li key={node}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{node}</p>
                {index < privacyFlow.length - 1 ? <i aria-hidden="true">→</i> : null}
              </li>
            ))}
          </ol>
        </section>

        <div className="privacy-grid">
          <section className="privacy-section privacy-guarantees" aria-labelledby="privacy-guarantees">
            <div className="privacy-section-heading"><h2 id="privacy-guarantees">PRIVACY GUARANTEES</h2></div>
            <ul>
              {privacyGuarantees.map((guarantee, index) => (
                <li key={guarantee}><span>{String(index + 1).padStart(2, "0")}</span>{guarantee}</li>
              ))}
            </ul>
          </section>

          <div>
            <TagSection id="formats" title="SUPPORTED INPUT" items={supportedFormats} />
            <TagSection id="privacy-stack" title="STACK" items={privacyStack} />
          </div>
        </div>

        <p className="privacy-public-note">public project summary / personal audit results excluded</p>
      </article>
    </SectionShell>
  );
}

function TagSection({ id, title, items }: { id: string; title: string; items: readonly string[] }) {
  return (
    <section className="privacy-section privacy-tag-section" aria-labelledby={id}>
      <div className="privacy-section-heading"><h2 id={id}>{title}</h2></div>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
