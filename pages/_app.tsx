import '../styles/globals.css'
import type { AppProps } from 'next/app'

function LC({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default LC
