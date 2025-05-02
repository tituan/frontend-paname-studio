import '../styles/globals.scss';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Métadonnées globales */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* SEO */}
        <title>Paname Studio – Créatif & Digital</title>
        <meta
          name="description"
          content="Paname Studio est un studio créatif à Paris spécialisé en création web, identité visuelle, photo et vidéo. Donnez vie à votre univers digital avec style."
        />

        {/* Open Graph (réseaux sociaux) */}
        <meta property="og:title" content="Paname Studio – Créatif & Digital" />
        <meta
          property="og:description"
          content="Studio créatif à Paris spécialisé en création de sites web, photographie, vidéo et identité visuelle."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paname-studio.fr/" />
        <meta property="og:image" content="https://www.paname-studio.fr/img/paname-studio-logo-01.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
