import '../styles/globals.scss';
import Head from 'next/head';
import RadioPlayer from '../components/RadioPlayer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Métadonnées globales */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <title>Paname Studio – Créatif & Digital</title>
        <meta
          name="description"
          content="Paname Studio est un studio créatif à Paris spécialisé en création web, identité visuelle, photo et vidéo. Donnez vie à votre univers digital avec style."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Paname Studio – Créatif & Digital" />
        <meta property="og:description" content="Studio créatif à Paris spécialisé en création de sites web, photographie, vidéo et identité visuelle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paname-studio.fr/" />
        <meta property="og:image" content="https://www.paname-studio.fr/img/paname-studio-logo-01.png" />
      </Head>
      
      <Component {...pageProps} />
      
      {/* Notre player radio global */}
      <RadioPlayer />
    </>
  );
}

export default App;
