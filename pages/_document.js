import Document, { Head, NextScript, Main, Html } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ro">
        <Head>
          <meta
            name="description"
            content="Cezara's Natural Honey. Natural Honey Taste"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
