import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/sections/theme-toggle";

export function Hero() {
  return (
    <section className="bg-muted border-b border-border">
      <div className="mx-auto max-w-6xl px-8 py-16">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="font-heading text-5xl font-bold tracking-tight">
              Rhaniel Xavier
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Software Engineer & Full-Stack Developer
            </p>
            <div className="bg-primary h-1 w-20 rounded-full" />
            <p className="text-base text-muted-foreground max-w-xl pt-1">
              Desenvolvedor Full Stack com foco em automação, integração de sistemas, APIs e ferramentas internas.
              Atua com visão computacional, biometria e IA aplicada utilizando Python, TypeScript, React,
              FastAPI e PostgreSQL.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href="https://github.com/rhanielmx" target="_blank" rel="noopener noreferrer" />}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </Button>
              <Button nativeButton={false} render={<a href="mailto:rhanielmag.xavier@gmail.com" />}>
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
