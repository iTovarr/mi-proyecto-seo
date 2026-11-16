import Head from "next/head";
import Link from "next/link";

const SITE = "https://mi-proyecto-seo-595c.onrender.com";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para consultas sobre SEO y optimización web con Next.js."
        />
        <meta property="og:title" content="Contacto | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Ponte en contacto con nosotros para consultas sobre SEO y optimización web con Next.js."
        />
        <meta property="og:image" content={`${SITE}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE}/contacto`} />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>Escríbenos a contacto@mi-sitio.com para resolver tus dudas sobre SEO.</p>
      <p>
        <Link href="/">Volver al inicio</Link>
      </p>
    </>
  );
}
