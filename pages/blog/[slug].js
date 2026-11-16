import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../data/posts";

const SITE = "https://mi-proyecto-seo-595c.onrender.com";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Mi Sitio Optimizado`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`${SITE}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>
        <Link href="/blog">Volver al blog</Link>
      </p>
    </>
  );
}
