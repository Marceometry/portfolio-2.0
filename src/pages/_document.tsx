import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="icons/journal-whills.svg" type="image/png"/>

          <meta name="title" content="Marcelino | FrontEnd Dev" />
          <meta name="description" content="Site que desenvolvi utilizando React e Next.js para servir como meu portfólio pessoal." />
          <meta name="image" content="https://marcelino-frontend.vercel.app/images/wallpaper.png" />
          <meta name="url" content="https://marcelino-frontend.vercel.app/" />

          <meta property="og:title" content="Marcelino | FrontEnd Dev" />
          <meta property="og:description" content="Site que desenvolvi utilizando React e Next.js para servir como meu portfólio pessoal." />
          <meta property="og:image" content="https://marcelino-frontend.vercel.app/images/wallpaper.png" />
          <meta property="og:url" content="https://marcelino-frontend.vercel.app/" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
