import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../data/posts";

const SITE = "https://mi-proyecto-seo-595c.onrender.com";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de SEO y Next.js | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos sobre SEO, rendimiento web y optimización de imágenes con Next.js."
        />
        <meta property="og:title" content="Blog de SEO y Next.js | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Artículos sobre SEO, rendimiento web y optimización de imágenes con Next.js."
        />
        <meta property="og:image" content={`${SITE}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">Volver al inicio</Link>
      </p>
    </>
  );
}
