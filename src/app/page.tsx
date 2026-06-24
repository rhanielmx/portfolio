import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1">
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
