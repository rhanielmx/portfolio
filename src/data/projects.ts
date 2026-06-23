export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  previewColor: "primary" | "secondary" | "accent";
  icon: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "MagFinance",
    description: "Gestão de finanças pessoais com React, Fastify e PostgreSQL.",
    fullDescription:
      "Aplicação full-stack de finanças pessoais para organização doméstica, com dashboard, controle de contas fixas, transações, parcelamentos e planejamento mensal. Autenticação JWT, ORM Drizzle, validação Zod e deploy automatizado.",
    tags: ["React", "TypeScript", "Fastify", "PostgreSQL", "Drizzle ORM"],
    previewColor: "primary",
    icon: "wallet",
    githubUrl: "https://github.com/rhanielmx/magfinance",
    liveUrl: "https://magfinance.vercel.app",
  },
  {
    title: "Editor IPBIta",
    description: "Editor de vídeos de culto com transcrição e classificação inteligente de segmentos.",
    fullDescription:
      "Aplicativo desktop em Tauri para edição e processamento inteligente de vídeos de culto e igreja. Pipeline completo com extração de áudio (FFmpeg), transcrição (faster-whisper), classificação de seções (louvor, oração, sermão, avisos) via keyword/SBERT/Ollama, detecção de versículos bíblicos, sugestão de capítulos, geração de Reels, timeline interativa com split/merge/drag, e exportação de vídeo/legendas. Arquitetura híbrida com sidecar Python para processamento pesado e fallback gracioso entre engines de IA.",
    tags: ["Tauri", "React", "TypeScript", "Python", "Whisper", "Rust"],
    previewColor: "secondary",
    icon: "video",
    githubUrl: "https://github.com/rhanielmx/editor-ipbita",
  },
  {
    title: "IPBIta Annotation Tool",
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
    title: "pizza.shop",
    description: "Painel administrativo para pizzarias com métricas e gestão de pedidos.",
    fullDescription: "SPA moderna em React + TypeScript para donos de pizzaria acompanharem vendas, gerenciarem pedidos em tempo real e editarem o perfil do estabelecimento. Dashboard com gráficos de receita e produtos populares, tabela de pedidos com filtros, paginação e workflow completo (aprovar, despachar, entregar, cancelar). Cache otimista com React Query, tema dark/light, componentes acessíveis com Radix UI e validação com Zod.",
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "shadcn/ui"],
    previewColor: "primary",
    icon: "pizza",
    githubUrl: "https://github.com/rhanielmx/pizzashop-web",
    liveUrl: ""
  },
  {
    title: "ITG Conecta",
    description: "Sistema de chamados interno com Next.js 15, Prisma e SQLite.",
    fullDescription: "Plataforma full-stack de gestão de chamados técnicos e administrativos para o Instituto Teológico Gamaliel (ITG). Dashboard com gráficos Recharts, RBAC com 3 papéis (USER, MANAGER, ADMIN), fluxo completo de tickets com categorias e prioridades, exportação para Excel, forçar troca de senha no primeiro acesso e TanStack Query para gerenciamento de estado.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "NextAuth"],
    previewColor: "primary",
    icon: "ticket",
    githubUrl: "https://github.com/rhanielmx/ticketing",
    liveUrl: ""
  }
];
