"use client";

import Link from "next/link";
import {
  ShoppingCart,
  ListTodo,
  CloudSun,
  Users,
  LayoutDashboard,
  MessageCircle,
  Wallet,
  Video,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

const iconMap: Record<string, LucideIcon> = {
  "shopping-cart": ShoppingCart,
  "list-todo": ListTodo,
  "cloud-sun": CloudSun,
  users: Users,
  "layout-dashboard": LayoutDashboard,
  "message-circle": MessageCircle,
  wallet: Wallet,
  video: Video,
};

const previewVariants = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const iconVariants = {
  primary: "text-primary-foreground",
  secondary: "text-secondary-foreground",
  accent: "text-accent-foreground",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function getInitials(title: string) {
  const words = title.split(" ");
  if (words.length === 1) return title.slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <Link href={`?project=${index}`} scroll={false}>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md h-full">
        <div
          className={`${previewVariants[project.previewColor]} h-48 flex flex-col items-center justify-center gap-2`}
        >
          <span className="text-4xl font-bold tracking-tight text-white/90 drop-shadow-sm">
            {getInitials(project.title)}
          </span>
          {Icon && (
            <Icon
              className={`${iconVariants[project.previewColor]} h-5 w-5 opacity-50`}
            />
          )}
        </div>
        <CardHeader>
          <CardTitle className="font-heading text-lg">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Código
              </button>
            )}
            {project.liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Deploy
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
