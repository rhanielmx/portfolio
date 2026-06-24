import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ProjectDetail } from "@/components/sections/project-detail";
import { Footer } from "@/components/sections/footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;

  return (
    <>
      <Hero />
      <main className="flex-1">
        <ProjectGrid />
      </main>
      <Footer />
      <ProjectDetail projectParam={project ?? null} />
    </>
  );
}
