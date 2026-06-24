export interface Project {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  tags: string[];
  previewColor: "primary" | "secondary" | "accent";
  icon: string;
  coverImage?: string;
  imagesFolder?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const projects: Project[] = [
  {
    title: "MagFinance",
    slug: "magfinance",
    description: "Gestão de finanças pessoais com React, Fastify e PostgreSQL.",
    fullDescription:
      "Aplicação full-stack de finanças pessoais para organização doméstica, com dashboard, controle de contas fixas, transações, parcelamentos e planejamento mensal. Autenticação JWT, ORM Drizzle, validação Zod e deploy automatizado.",
    tags: ["React", "TypeScript", "Fastify", "PostgreSQL", "Drizzle ORM"],
    previewColor: "primary",
    icon: "wallet",
    coverImage: "/projects/magfinance/dashboard.png",
    imagesFolder: "projects/magfinance",
    githubUrl: "https://github.com/rhanielmx/magfinance",
    liveUrl: "https://magfinance-frontend.vercel.app",
  },
  {
    title: "Editor IPBIta",
    slug: "editor-ipbita",
    description: "Editor de vídeos de culto com transcrição e classificação inteligente de segmentos.",
    fullDescription:
      "Aplicativo desktop em Tauri para edição e processamento inteligente de vídeos de culto e igreja. Pipeline completo com extração de áudio (FFmpeg), transcrição (faster-whisper), classificação de seções (louvor, oração, sermão, avisos) via keyword/SBERT/Ollama, detecção de versículos bíblicos, sugestão de capítulos, geração de Reels, timeline interativa com split/merge/drag, e exportação de vídeo/legendas. Arquitetura híbrida com sidecar Python para processamento pesado e fallback gracioso entre engines de IA.",
    tags: ["Tauri", "React", "TypeScript", "Python", "Whisper", "Rust"],
    previewColor: "secondary",
    icon: "video",
    coverImage: "/projects/editor-ipbita/timeline.png",
    imagesFolder: "projects/editor-ipbita",
    githubUrl: "https://github.com/rhanielmx/editor-ipbita",
  },
  {
    title: "IPBIta Annotation Tool",
    slug: "ipbita-annotation-tool",
    description: "Ferramenta de anotação de vídeos com transcrição Whisper e classificação semi-automatizada.",
    fullDescription:
      "Aplicação desktop para anotação manual e semi-automatizada de vídeos de cultos, com segmentação temporal, transcrição via faster-whisper, extração de features acústicas e textuais, treinamento de modelo classificador (Random Forest / XGBoost) e exportação de datasets. Interface React 19 + Tailwind v4 + Tauri v2 com sidecars Python para ML.",
    tags: [
      "React",
      "TypeScript",
      "Tauri",
      "Rust",
      "Python",
      "faster-whisper",
      "scikit-learn",
      "Tailwind CSS",
    ],
    previewColor: "primary",
    icon: "video",
    githubUrl: "https://github.com/rhanielmx/ipbita-annotation-tool",
  },
  {
    title: "Repertório IPB",
    slug: "repertorio-ipb",
    description:
      "Sistema de repertório musical para igreja com Next.js, Prisma e PostgreSQL.",
    fullDescription:
      "Aplicação full-stack para gerenciamento do repertório musical de uma igreja presbiteriana. Catálogo de músicas com letra, tom e referência bíblica; fluxo de sugestão e revisão (MEMBER → REVIEWER); autenticação por papéis (MEMBER, REVIEWER, ADMIN); busca com suporte a acentos; importação de letras via PPTX; vídeos do YouTube incorporados. Design editorial com paleta IPB (verde e dourado).",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "shadcn/ui",
    ],
    previewColor: "primary",
    icon: "music",
    githubUrl: "https://github.com/rhanielmx/culto-ipb",
    liveUrl: "https://culto-ipb.vercel.app/",
    coverImage: "/projects/repertorio-ipb/home.png",
    imagesFolder: "projects/repertorio-ipb",
  },
  {
    title: "ITG Conecta",
    slug: "itg-conecta",
    description: "Sistema de chamados interno com Next.js 15, Prisma e SQLite.",
    fullDescription: "Plataforma full-stack de gestão de chamados técnicos e administrativos para o Instituto Teológico Gamaliel (ITG). Dashboard com gráficos Recharts, RBAC com 3 papéis (USER, MANAGER, ADMIN), fluxo completo de tickets com categorias e prioridades, exportação para Excel, forçar troca de senha no primeiro acesso e TanStack Query para gerenciamento de estado.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "NextAuth"],
    previewColor: "primary",
    icon: "ticket",
    githubUrl: "https://github.com/rhanielmx/ticketing",
  }
];
