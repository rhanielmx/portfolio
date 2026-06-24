import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft } from "lucide-react";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { getProjectImages } from "@/lib/project-images";
import { ImageCarousel } from "@/components/sections/project-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const images = project.imagesFolder ? getProjectImages(project.imagesFolder) : [];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar para home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-4 py-8 space-y-8">
          {images.length > 0 && (
            <ImageCarousel images={images} title={project.title} />
          )}

          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-sm font-medium text-foreground">
              Tecnologias
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                nativeButton={false}
                render={
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Projeto
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Código Fonte
              </Button>
            )}
          </div>
        </article>
      </main>

      <div className="mx-auto max-w-4xl w-full px-4 pb-8">
        <nav className="flex items-center justify-between gap-4 border-t pt-6">
          {prev ? (
            <Link
              href={`/projetos/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Anterior</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          {next ? (
            <Link
              href={`/projetos/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Próximo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
