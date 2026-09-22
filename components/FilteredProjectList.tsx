"use client";

import { useMemo, useState } from "react";
import type { ProjectEntry } from "@/data/projects";
import { ProjectList } from "./ProjectList";

const filters = ["all", "homelab", "print", "code"] as const;
type Filter = (typeof filters)[number];

export function FilteredProjectList({ items }: { items: readonly ProjectEntry[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleItems = useMemo(
    () => filter === "all" ? items : items.filter((item) => item.category === filter),
    [filter, items],
  );

  return (
    <div>
      <div className="filter-row" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className="filter-command"
            data-active={filter === item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            [{item}]
          </button>
        ))}
      </div>
      <p className="filter-result" aria-live="polite">{String(visibleItems.length).padStart(2, "0")} matching entries</p>
      <ProjectList items={visibleItems} />
    </div>
  );
}
