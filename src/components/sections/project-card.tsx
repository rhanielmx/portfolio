import Link from "next/link";
import {
  ShoppingCart,
  ListTodo,
  CloudSun,
  Users,
  LayoutDashboard,
  MessageCircle,
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

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <Link href={`?project=${index}`} scroll={false}>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md h-full">
        <div
          className={`${previewVariants[project.previewColor]} h-48 flex items-center justify-center`}
        >
          {Icon && (
            <Icon
              className={`${iconVariants[project.previewColor]} h-12 w-12 opacity-80 transition-transform group-hover:scale-110`}
            />
          )}
        </div>
        <CardHeader>
          <CardTitle className="font-heading text-lg">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
