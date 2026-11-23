"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

export interface Project {
  title: string;
  category?: string;
  description: string;
  techStack: string[];
  liveLink?: string;   // 👈 optional bana do
  image?: string;      // optional cover image, e.g. "/covers/sage50.png" (file in /public/covers)
  caseStudyLink?: string; // for private projects: keeps the private note and adds a "View Project" button
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPrivate = !project.liveLink;

  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
        {/* Cover — full-bleed, same 2:1 ratio as the source images so nothing is cropped */}
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            className="block aspect-[2/1] w-full object-cover border-b border-border"
          />
        ) : (
          isPrivate && (
            <div
              role="img"
              aria-label={`${project.title} — private client project`}
              className="relative flex aspect-[2/1] w-full flex-col items-center justify-center gap-2.5 overflow-hidden border-b border-border bg-gradient-to-br from-muted via-background to-muted"
            >
              {/* subtle grid texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-md">
                <Lock className="h-6 w-6 text-foreground" aria-hidden="true" />
              </span>
              <span className="relative text-base font-semibold tracking-wide text-foreground">
                Private Client Project
              </span>
              <span className="relative text-xs text-muted-foreground">
                Details shared on request
              </span>
            </div>
          )
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {project.category && (
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
          )}

          <h3 className="mb-3 text-lg font-semibold leading-snug tracking-tight text-card-foreground font-display">
            {project.title}
          </h3>

          <p className="mb-5 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium tracking-wide"
                style={{
                  backgroundColor: "var(--badge-bg)",
                  color: "var(--badge-text)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-6">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-card-foreground underline-offset-4 transition-colors duration-200 hover:underline group-hover:text-primary"
              >
                View Project
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            ) : (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-card-foreground">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  Private client project
                </span>
                {project.caseStudyLink && (
                  <a
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-card-foreground underline-offset-4 transition-colors duration-200 hover:underline group-hover:text-primary"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}
