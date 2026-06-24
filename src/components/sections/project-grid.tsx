import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-8">
      <div className="space-y-1">
        <h2 className="font-heading text-3xl font-bold">Projetos</h2>
        <p className="text-sm text-muted-foreground">
          Uma seleção dos meus projetos pessoais e profissionais.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
