import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'

class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="luxury">
        <Head>
          <meta name="description" content="Frontend Developer" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,900&amp;family=Slabo+13px&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
