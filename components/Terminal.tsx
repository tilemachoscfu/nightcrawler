"use client";

import { useState } from "react";
import { TerminalMenu } from "./TerminalMenu";
import { TerminalPrompt } from "./TerminalPrompt";

export function Terminal() {
  const [pendingCommand, setPendingCommand] = useState<string | null>(null);

  return (
    <main className="terminal-frame">
      <div className="terminal-main">
        <TerminalPrompt command="whoami" typing />
        <section className="mt-9" aria-labelledby="identity-heading">
          <h1 id="identity-heading" className="intro-reveal intro-name text-xl font-medium tracking-[0.08em] sm:text-2xl">NIGHTCRAWLER</h1>
          <p className="intro-reveal intro-role mt-2 text-[var(--muted)]">developer / maker / homelab</p>
        </section>
        <TerminalMenu onCommand={setPendingCommand} />
        <div className="intro-reveal intro-ready mt-14" aria-live="polite">
          <TerminalPrompt command={pendingCommand ?? undefined} cursor={!pendingCommand} />
        </div>
      </div>
      <footer className="system-meta" aria-label="System status">
        <span><span className="status-dot" />system online</span>
        <span>build: 1.0.0</span>
      </footer>
    </main>
  );
}
