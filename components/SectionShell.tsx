import Link from "next/link";
import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";
import { TerminalCursor } from "./TerminalCursor";
import { TerminalPrompt } from "./TerminalPrompt";
import { SocialLinks } from "./SocialLinks";
import { navigationItems } from "@/data/navigation";

export function SectionShell({ path, children }: { path: string; children: ReactNode }) {
  return (
    <main className="terminal-frame section-shell">
      <header className="section-header">
        <Link href="/" className="section-brand">NIGHTCRAWLER</Link>
        <nav aria-label="Sections">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="section-nav-link terminal-link"
              aria-current={item.href === `/${path}` ? "page" : undefined}
            >
              <span>{item.index}</span>{item.shortLabel}
            </Link>
          ))}
        </nav>
      </header>
      <PageTransition>
        <div className="section-prompt"><TerminalPrompt path={`~/${path}`} /></div>
        <div className="section-content">{children}</div>
        <div className="mt-14 flex items-center text-[var(--muted)]"><TerminalCursor /></div>
      </PageTransition>
      <footer className="site-footer">
        <Link href="/" className="terminal-link hover:text-[var(--foreground)] focus:text-[var(--foreground)]">cd ~</Link>
        <SocialLinks compact />
        <span>nightcrawler / {path}</span>
      </footer>
    </main>
  );
}
