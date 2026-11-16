import { getAllPosts } from "../../data/posts";

const BASE_URL = "https://mi-proyecto-seo-595c.onrender.com";

export default async function handler(req, res) {
  // Rutas estáticas
  const staticUrls = [
    { loc: "/" },
    { loc: "/blog" },
    { loc: "/contacto" },
  ];

  // Rutas dinámicas: salen de la "base de datos" de artículos
  const posts = await getAllPosts();
  const dynamicUrls = posts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updatedAt,
  }));

  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${BASE_URL}${u.loc}</loc>${
        u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""
      }</url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
