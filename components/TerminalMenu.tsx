"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";

export const terminalMenuItems = [
  { label: "Projects", href: "/projects", glyph: "[]" },
  { label: "3D Printing", href: "/3d-printing", glyph: "3D" },
  { label: "Homelab", href: "/homelab", glyph: "::" },
  { label: "Code", href: "/code", glyph: "{}" },
  { label: "About", href: "/about", glyph: "@" },
] as const;

export function TerminalMenu({ onCommand }: { onCommand?: (command: string) => void }) {
  const router = useRouter();
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [navigating, setNavigating] = useState(false);

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (navigating) return;
    setNavigating(true);
    onCommand?.(`cd ${href}`);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => router.push(href), reduceMotion ? 0 : 240);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = activeIndex;
    if (event.key === "ArrowDown") next = (activeIndex + 1) % terminalMenuItems.length;
    if (event.key === "ArrowUp") next = (activeIndex - 1 + terminalMenuItems.length) % terminalMenuItems.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = terminalMenuItems.length - 1;
    setActiveIndex(next);
    linksRef.current[next]?.focus();
  }

  return (
    <nav aria-label="Primary" className="command-nav">
      <ul onKeyDown={handleKeyDown} className="flex flex-wrap gap-x-5 gap-y-2">
        {terminalMenuItems.map((item, index) => (
          <li key={item.href} className="menu-entry intro-reveal">
            <Link
              ref={(node) => { linksRef.current[index] = node; }}
              href={item.href}
              onClick={(event) => navigate(event, item.href)}
              onFocus={() => setActiveIndex(index)}
              aria-current={activeIndex === index ? "true" : undefined}
              className="terminal-link group inline-flex min-h-9 items-center py-1 text-[var(--muted-bright)]"
            >
              <span
                aria-hidden="true"
                className={`mr-2 inline-block w-[1ch] text-[var(--foreground)] transition-opacity duration-150 ${activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus:opacity-100"}`}
              >
                &gt;
              </span>
              <span className="menu-glyph" aria-hidden="true">{item.glyph}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
