import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import utilStyles from '../styles/utils.module.scss'
import { Constants } from '../constants/constants';
import { getSortedPostsData } from '../utils/posts'
import { GetStaticProps } from 'next/types'
import Link from 'next/link'



export default function IndexPage() {

  return (
    <Layout home>
      <Head>
        <title>{Constants.SITETITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/another" locale="fr">
          <a>To /fr/another</a>
        </Link>
        <p>{ Constants.WEBSITEDESCRIPTION } </p>
      </section>
    </Layout>
  )
}






