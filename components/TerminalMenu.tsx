"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { navigationItems } from "@/data/navigation";

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
    if (event.key === "ArrowDown") next = (activeIndex + 1) % navigationItems.length;
    if (event.key === "ArrowUp") next = (activeIndex - 1 + navigationItems.length) % navigationItems.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = navigationItems.length - 1;
    setActiveIndex(next);
    linksRef.current[next]?.focus();
  }

  return (
    <nav aria-label="Primary" className="command-nav">
      <ul onKeyDown={handleKeyDown}>
        {navigationItems.map((item, index) => (
          <li key={item.href} className="menu-entry intro-reveal">
            <Link
              ref={(node) => { linksRef.current[index] = node; }}
              href={item.href}
              onClick={(event) => navigate(event, item.href)}
              onFocus={() => setActiveIndex(index)}
              data-active={activeIndex === index}
              className="rich-menu-link group"
            >
              <span className="menu-index" aria-hidden="true">{item.index}</span>
              <span className="menu-glyph" aria-hidden="true">{item.glyph}</span>
              <span className="menu-copy">
                <span className="menu-heading">
                  <span className="menu-label">{item.label}</span>
                  <span className="menu-path">~{item.href}</span>
                </span>
                <span className="menu-description">{item.description}</span>
                <span className="menu-details" aria-label={`${item.label} includes ${item.details.join(", ")}`}>
                  {item.details.map((detail) => <span key={detail}>{detail}</span>)}
                </span>
              </span>
              <span className="menu-meta">
                {item.status ? <span className="signal-dot" aria-hidden="true" /> : null}
                {item.meta}
              </span>
              <span className="menu-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
