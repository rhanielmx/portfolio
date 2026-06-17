export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  previewColor: "primary" | "secondary" | "accent";
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace com Next.js, Stripe e PostgreSQL.",
    fullDescription:
      "Plataforma completa de e-commerce com carrinho de compras, checkout integrado com Stripe, painel administrativo e gestão de estoque. Construída com foco em performance, SEO e experiência do usuário.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    previewColor: "primary",
    icon: "shopping-cart",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicativo de gerenciamento de tarefas com kanban e colaboração.",
    fullDescription:
      "Aplicativo colaborativo de gerenciamento de tarefas com quadro kanban drag-and-drop, atribuição de membros, comentários em tempo real via WebSocket e notificações push.",
    tags: ["React", "Node.js", "Socket.io"],
    previewColor: "secondary",
    icon: "list-todo",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard climático com gráficos interativos e previsão por IA.",
    fullDescription:
      "Dashboard que consome dados meteorológicos de múltiplas APIs, exibe gráficos interativos de temperatura/umidade/precipitação e usa modelo de ML para previsões personalizadas.",
    tags: ["Python", "React", "D3.js"],
    previewColor: "accent",
    icon: "cloud-sun",
  },
  {
    title: "Social Media API",
    description: "API RESTful para rede social com autenticação e feed.",
    fullDescription:
      "API backend completa para rede social com autenticação JWT, posts, likes, comentários, seguidores, feed algorítmico e cache com Redis para alta performance.",
    tags: ["Go", "PostgreSQL", "Redis"],
    previewColor: "primary",
    icon: "users",
  },
  {
    title: "Portfolio Generator",
    description:
      "Gerador de portfólios estáticos com temas customizáveis.",
    fullDescription:
      "Ferramenta CLI + web que gera sites de portfólio estáticos a partir de um arquivo de configuração YAML. Suporte a múltiplos temas, deploy integrado com GitHub Pages.",
    tags: ["Astro", "Tailwind", "MDX"],
    previewColor: "secondary",
    icon: "layout-dashboard",
  },
  {
    title: "AI Chat Interface",
    description: "Interface de chat com IA usando LangChain e streaming.",
    fullDescription:
      "Interface moderna de chat com IA generativa utilizando LangChain para orquestração de modelos, streaming de respostas em tempo real, histórico de conversas e suporte a múltiplos provedores de LLM.",
    tags: ["Next.js", "OpenAI", "WebSocket"],
    previewColor: "accent",
    icon: "message-circle",
  },
];
