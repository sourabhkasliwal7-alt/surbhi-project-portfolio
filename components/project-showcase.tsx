"use client";

import { useState } from "react";
import { ProjectCard, type Project } from "@/components/project-card";

const FILTERS = [
  "All Projects",
  "AI & Automation",
  "SaaS & MVPs",
  "Full-Stack Applications",
] as const;

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>(FILTERS[0]);

  // Filtering keeps the original (curated) order.
  const visible =
    active === FILTERS[0]
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <nav
          aria-label="Project categories"
          className="mx-auto max-w-6xl px-4 py-3 sm:px-6"
        >
          <div className="flex flex-wrap justify-center gap-1.5">
            {FILTERS.map((name) => {
              const isActive = active === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(name)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <div
        id="projects-top"
        aria-label="Project showcase"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-28 scroll-mt-20"
      >
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
