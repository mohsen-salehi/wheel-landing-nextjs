import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Landing-Panel</title>
            <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-72x72.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
