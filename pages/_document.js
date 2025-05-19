import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Google Tag Manager - HEAD */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-595GFJ57');`,
          }}
        />

        {/* CookieConsent - désactivé pour debug */}
        {/*
        <script async src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
        <style>{`
          .cc-btn:hover {
            background-color: #ffff !important;
            color: #000 !important;
            opacity: 1 !important;
            text-decoration: none !important;
          }
        `}</style>
        */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-595GFJ57"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* CookieConsent config - désactivé */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function(){
                window.cookieconsent.initialise({
                  palette: {
                    popup: { background: "#000" },
                    button: { background: "#ffff", text: "#000" }
                  },
                  theme: "classic",
                  position: "bottom-right",
                  content: {
                    message: "Ce site utilise des cookies pour vous garantir la meilleure expérience.",
                    dismiss: "J'ai compris",
                    link: "En savoir plus",
                    href: "/politique-de-confidentialite"
                  }
                })
              });
            `,
          }}
        />
        */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

