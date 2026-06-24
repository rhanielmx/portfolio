"use client";

import { useRouter } from "next/navigation";
import { X, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

function getInitials(title: string) {
  const words = title.split(" ");
  if (words.length === 1) return title.slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const previewVariants = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export function ProjectDetail({
  projectParam,
}: {
  projectParam: string | null;
}) {
  const router = useRouter();
  const project = projectParam !== null ? projects[Number(projectParam)] : null;

  const open = project != null;

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) router.push("/", { scroll: false });
      }}
    >
      {project && (
        <DialogContent className="sm:max-w-4xl">
          {project.imagesFolder ? null : (
            <div
              className={`${previewVariants[project.previewColor]} -mx-4 -mt-4 mb-0 h-48 flex flex-col items-center justify-center gap-2 rounded-t-lg`}
            >
              <span className="text-5xl font-bold tracking-tight text-white/90 drop-shadow-sm">
                {getInitials(project.title)}
              </span>
            </div>
          )}

          <DialogTitle className="font-heading text-2xl sr-only">
            {project.title}
          </DialogTitle>

          <DialogHeader className="pt-2">
            <DialogTitle className="font-heading text-2xl">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="text-sm leading-relaxed">
            {project.fullDescription}
          </DialogDescription>

          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Tecnologias</p>
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
              <Button nativeButton={false} render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Projeto
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" nativeButton={false} render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Código Fonte
              </Button>
            )}
            {(project.liveUrl || project.githubUrl) && (
              <Button
                variant="ghost"
                onClick={() => router.push("/", { scroll: false })}
              >
                <X className="mr-2 h-4 w-4" />
                Fechar
              </Button>
            )}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
