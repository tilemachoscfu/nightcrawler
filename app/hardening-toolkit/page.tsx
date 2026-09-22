import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import {
  hardeningChecks,
  hardeningModules,
  hardeningOverview,
  hardeningStack,
  hardeningWorkflow,
  rollbackControls,
} from "@/data/hardening";

export const metadata: Metadata = {
  title: "hardening-toolkit",
  description: "Rollback-first Linux, Docker, DNS and SSH hardening toolkit.",
};

export default function HardeningToolkitPage() {
  return (
    <SectionShell path="hardening-toolkit">
      <article className="hardening-project">
        <header className="hardening-intro">
          <p className="hardening-kicker"><i /> 04 / SECURITY TOOLING</p>
          <h1>HARDENING<br />TOOLKIT</h1>
          <p>{hardeningOverview}</p>
          <div className="hardening-status-line">
            <span>MODE / ROLLBACK-FIRST</span>
            <span>SCOPE / HOST + CONTAINERS</span>
            <span>STATUS / ACTIVE</span>
          </div>
          <a
            className="hardening-repo-link"
            href="https://github.com/tilemachoscfu/hardening-toolkit"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">↗</span> view source on github
          </a>
        </header>

        <section className="hardening-section" aria-labelledby="safe-workflow">
          <div className="hardening-section-heading">
            <h2 id="safe-workflow">SAFE CHANGE WORKFLOW</h2>
            <span>apply with recovery</span>
          </div>
          <ol className="hardening-workflow">
            {hardeningWorkflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
                {index < hardeningWorkflow.length - 1 ? <i aria-hidden="true">→</i> : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="hardening-section" aria-labelledby="modules">
          <div className="hardening-section-heading">
            <h2 id="modules">MODULES</h2>
            <span>{String(hardeningModules.length).padStart(2, "0")} controls</span>
          </div>
          <ol className="hardening-modules">
            {hardeningModules.map((module, index) => (
              <li key={module.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{module.name}</p>
                  <code>{module.scope}</code>
                  <p>{module.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="hardening-rollback" aria-labelledby="rollback">
          <div>
            <p>RECOVERY LAYER / ARMED</p>
            <h2 id="rollback">ROLLBACK CONTROLS</h2>
          </div>
          <ul>
            {rollbackControls.map((control) => <li key={control}><i />{control}</li>)}
          </ul>
        </section>

        <section className="hardening-section" aria-labelledby="verification-tools">
          <div className="hardening-section-heading">
            <h2 id="verification-tools">VERIFICATION</h2>
            <span>effective state checks</span>
          </div>
          <dl className="hardening-checks">
            {hardeningChecks.map((check) => (
              <div key={check.command}>
                <dt>{check.command}</dt>
                <dd>{check.purpose}</dd>
                <span><i /> check</span>
              </div>
            ))}
          </dl>
        </section>

        <section className="hardening-section" aria-labelledby="hardening-stack">
          <div className="hardening-section-heading"><h2 id="hardening-stack">STACK</h2><span>core tools</span></div>
          <ul className="hardening-stack">{hardeningStack.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <p className="hardening-public-note">public project summary / live network policy and host addresses excluded</p>
      </article>
    </SectionShell>
  );
}
