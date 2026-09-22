import type { ProjectEntry } from "@/data/projects";

export function ProjectList({ items }: { items: readonly ProjectEntry[] }) {
  return (
    <ol className="project-list" aria-label="Project list">
      {items.map((item, index) => (
        <li key={item.slug} className="project-row">
          <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")} /</span>
          <div>
            <p className="tracking-[0.025em]">{item.name}</p>
            {item.description ? <p className="project-description">{item.description}</p> : null}
            {item.details?.length ? <p className="project-details">{item.details.join(" / ")}</p> : null}
            {item.links?.length ? (
              <p className="project-links">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">[{link.label}]</a>
                ))}
              </p>
            ) : null}
          </div>
          <span className="project-category">{item.category ?? "project"}</span>
          <span className="project-state" data-state={item.status ?? "unknown"}>{item.status ?? "—"}</span>
        </li>
      ))}
    </ol>
  );
}
