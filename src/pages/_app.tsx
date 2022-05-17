import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My repo</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App
