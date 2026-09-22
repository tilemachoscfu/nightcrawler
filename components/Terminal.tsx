"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { TerminalMenu } from "./TerminalMenu";
import { TerminalPrompt } from "./TerminalPrompt";

const statusLines = [
  "backend engineering",
  "network infrastructure",
  "software development",
] as const;

const asciiLogo = String.raw`  _   _ ___ ____ _   _ _____ ____ ____      ___        ___     _____ ____
 | \ | |_ _/ ___| | | |_   _/ ___|  _ \    / \ \      / / |   | ____|  _ \
 |  \| || | |  _| |_| | | || |   | |_) |  / _ \ \ /\ / /| |   |  _| | |_) |
 | |\  || | |_| |  _  | | || |___|  _ <  / ___ \ V  V / | |___| |___|  _ <
 |_| \_|___\____|_| |_| |_| \____|_| \_\/_/   \_\_/\_/  |_____|_____|_| \_\
`;

export function Terminal() {
  const [pendingCommand, setPendingCommand] = useState<string | null>(null);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setStatusIndex((current) => (current + 1) % statusLines.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="site-shell">
      <header className="system-bar intro-reveal" aria-label="System status">
        <span>nightcrawler@home</span>
        <span className="system-bar-status"><span className="status-dot" />system online</span>
        <span>athens / gr</span>
      </header>

      <div className="home-content">
        <section className="home-hero" aria-labelledby="home-title">
          <p className="home-breadcrumb intro-reveal"><span>~</span><span>/</span><span>home</span></p>

          <p className="boot-line intro-reveal intro-name" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <span key={statusIndex} className="status-copy">{statusLines[statusIndex]}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>

          <h1 id="home-title" className="sr-only">NIGHTCRAWLER</h1>
          <pre className="ascii-logo intro-reveal intro-role" aria-hidden="true">{asciiLogo}</pre>
          <div className="mobile-wordmark intro-reveal intro-role" aria-hidden="true">
            <span data-word="NIGHT">NIGHT</span>
            <span data-word="CRAWLER">CRAWLER</span>
          </div>

          <p className="identity-line intro-reveal menu-entry">
            {"// building software, infrastructure and physical systems"}
          </p>

          <TerminalMenu onCommand={setPendingCommand} />
        </section>

        <section className="home-directory" aria-labelledby="selected-projects">
          <div className="directory-heading">
            <h2 id="selected-projects">~/selected-projects</h2>
            <span>{String(projects.length).padStart(2, "0")} entries</span>
          </div>
          <ol>
            {projects.slice(0, 4).map((project, index) => (
              <li key={project.slug}>
                <Link href={project.category === "print" ? "/3d-printing" : project.category === "code" ? "/code" : `/${project.slug}`} className="index-row">
                  <span className="index-number">{String(index + 1).padStart(2, "0")} /</span>
                  <span className="index-name">{project.name}</span>
                  <span className="index-description">{project.description}</span>
                  <span className="index-status" data-state={project.status ?? "active"}>{project.status ?? "active"}</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/projects" className="directory-more terminal-link">view all →</Link>
        </section>

        <div className="home-readouts">
          <section aria-labelledby="current-build">
            <p className="readout-label" id="current-build">~/current-build</p>
            <p className="readout-value">6U SERVER RACK</p>
            <p className="readout-note">modular printed infrastructure / prototype</p>
          </section>
          <section aria-labelledby="lab-state">
            <p className="readout-label" id="lab-state">~/lab-status</p>
            <dl className="readout-stats">
              <div><dt>hosts</dt><dd>02</dd></div>
              <div><dt>services</dt><dd>07</dd></div>
              <div><dt>state</dt><dd className="online-value"><span className="signal-dot" aria-hidden="true" />online</dd></div>
            </dl>
          </section>
        </div>

        <div className="command-ready intro-reveal intro-ready" aria-live="polite">
          <TerminalPrompt command={pendingCommand ?? undefined} cursor={!pendingCommand} />
        </div>
      </div>

      <footer className="site-footer">
        <span>build 2.0.0</span>
        <span>© NIGHTCRAWLER</span>
      </footer>
    </main>
  );
}
