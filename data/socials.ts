export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  glyph: string;
}

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    handle: "@tilemachoscfu",
    href: "https://github.com/tilemachoscfu",
    glyph: "<>"
  },
  {
    label: "Instagram",
    handle: "@tilemachos___",
    href: "https://www.instagram.com/tilemachos___/",
    glyph: "@"
  }
];
