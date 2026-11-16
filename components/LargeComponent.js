export default function LargeComponent() {
  return (
    <section style={{ marginTop: 24, padding: 16, border: "1px solid #ccc" }}>
      <h2>Componente cargado con Lazy Loading</h2>
      <p>
        Este componente se descarga en un chunk aparte, solo cuando el
        navegador lo necesita (ssr: false).
      </p>
    </section>
  );
}
