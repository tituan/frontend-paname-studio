import '../styles/globals.scss';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Paname Studio – Créatif & Digital</title>
        <meta name="description" content={'Paname Studio est un studio créatif à Paris spécialisé en identité visuelle, photo, vidéo et création web. Donnez vie à votre univers digital avec style.'} />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
