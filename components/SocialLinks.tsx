import { socialLinks } from "@/data/socials";

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <nav className="footer-socials" aria-label="Social profiles">
        {socialLinks.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="terminal-link">
            {item.label.toLowerCase()}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="social-directory" aria-label="Social profiles">
      <ul>
        {socialLinks.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer" className="social-link-row">
              <span className="social-glyph" aria-hidden="true">{item.glyph}</span>
              <span className="social-label">{item.label}</span>
              <span className="social-handle">{item.handle}</span>
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
