import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='Boilerplate' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='theme-color' content='#000000' />
          <meta property='og:url' content='' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Boilerplate' />
          <meta property='og:description' content='Boilerplate' />
          <meta property='og:image' content='/favicon.ico' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='' />
          <meta property='twitter:url' content='' />
          <meta name='twitter:title' content='Boilerplate' />
          <meta name='twitter:description' content='Boilerplate' />
          <meta name='twitter:image' content='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
