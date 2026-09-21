import type { ProjectEntry } from "@/data/projects";

export function ProjectList({ items }: { items: readonly ProjectEntry[] }) {
  return (
    <ol className="mt-12" aria-label="Project list">
      {items.map((item, index) => (
        <li key={item.slug} className="project-row">
          <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")} /</span>
          <div>
            <p className="tracking-[0.025em]">{item.name}</p>
            {item.description ? <p className="project-description">{item.description}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
