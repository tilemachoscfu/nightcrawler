import Link from "next/link";
import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";
import { TerminalCursor } from "./TerminalCursor";
import { TerminalPrompt } from "./TerminalPrompt";

export function SectionShell({ path, children }: { path: string; children: ReactNode }) {
  return (
    <main className="terminal-frame">
      <PageTransition>
        <TerminalPrompt path={`~/${path}`} />
        <div className="mt-12">{children}</div>
        <div className="mt-14 flex items-center text-[var(--muted)]"><TerminalCursor /></div>
      </PageTransition>
      <footer className="system-meta">
        <Link href="/" className="terminal-link hover:text-[var(--foreground)] focus:text-[var(--foreground)]">cd ~</Link>
        <span>{path}</span>
      </footer>
    </main>
  );
}
