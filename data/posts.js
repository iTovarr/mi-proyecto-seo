// Simula una base de datos / CMS de artículos del blog.
const posts = [
  {
    slug: "que-es-seo",
    title: "Qué es el SEO y por qué importa",
    description: "Conoce los fundamentos del SEO y cómo ayuda a que tu web aparezca en Google.",
    updatedAt: "2026-11-10",
  },
  {
    slug: "optimizar-imagenes-nextjs",
    title: "Cómo optimizar imágenes en Next.js",
    description: "Usa next/image para servir imágenes en WebP y mejorar la velocidad de carga.",
    updatedAt: "2026-11-12",
  },
  {
    slug: "sitemap-dinamico",
    title: "Crear un sitemap dinámico paso a paso",
    description: "Genera un sitemap.xml desde una API y envíalo a Google Search Console.",
    updatedAt: "2026-11-15",
  },
];

// Simula una consulta asíncrona a la base de datos.
export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
