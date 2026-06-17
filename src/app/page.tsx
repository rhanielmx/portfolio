import { Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ProjectDetail } from "@/components/sections/project-detail";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1">
        <ProjectGrid />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ProjectDetail />
      </Suspense>
    </>
  );
}
