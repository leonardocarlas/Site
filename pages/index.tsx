import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import * as constants from '../public/constants'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{constants.siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{constants.shortIntroduction}</p>
        <p>{constants.websiteDescription}</p>
      </section>
    </Layout>
  )
}




