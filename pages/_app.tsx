import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.css';


import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useEffect } from 'react';




export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
