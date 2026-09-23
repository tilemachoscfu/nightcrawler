"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TerminalMenu } from "./TerminalMenu";
import { TerminalPrompt } from "./TerminalPrompt";
import { SocialLinks } from "./SocialLinks";
import { VisitorCounter } from "./VisitorCounter";

const statusLines = [
  "backend engineering",
  "network infrastructure",
  "software development",
] as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
      <div className="home-content">
        <section className="home-hero" aria-labelledby="home-title">
          <p className="home-breadcrumb intro-reveal"><span>~</span><span>/</span><span>home</span></p>

          <p className="boot-line intro-reveal intro-name" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <span key={statusIndex} className="status-copy">{statusLines[statusIndex]}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>

          <h1 id="home-title" className="sr-only">NIGHTCRAWLER</h1>
          <div className="home-brand-lockup">
            <div className="stacked-wordmark intro-reveal intro-role" aria-hidden="true">
              <span data-word="NIGHT">NIGHT</span>
              <span data-word="CRAWLER">CRAWLER</span>
            </div>

            <div className="home-art intro-reveal intro-art">
              <Image
                src={`${basePath}/images/nightcrawler-demo.png`}
                alt="Pixel-art skeleton wearing a virtual-reality visor and holding a Nightcrawler Demo floppy disk"
                width={736}
                height={541}
                sizes="(max-width: 640px) calc(100vw - 2.5rem), 31rem"
                priority
                unoptimized
              />
            </div>
          </div>

          <p className="identity-line intro-reveal intro-tagline">
            {"// building software, infrastructure and physical systems"}
          </p>

          <TerminalMenu onCommand={setPendingCommand} />
        </section>

        <section className="home-socials" aria-label="External profiles"><SocialLinks /></section>

        <div className="command-ready intro-reveal intro-ready" aria-live="polite">
          <TerminalPrompt command={pendingCommand ?? undefined} cursor={!pendingCommand} />
        </div>
      </div>

      <footer className="site-footer">
        <span>build 2.0.0</span>
        <VisitorCounter />
        <span>© NIGHTCRAWLER</span>
      </footer>
    </main>
  );
}
