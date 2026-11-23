import { Hero } from "@/components/hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { projects } from "@/lib/projects-data"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProjectShowcase projects={projects} />
    </main>
  )
}
