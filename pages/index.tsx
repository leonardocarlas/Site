import Head from 'next/head'
import Layout from '../components/Layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { Constants } from '../constants/constants';
import { getSortedPostsData } from '../utils/posts'
import { GetStaticProps } from 'next/types'
import Link from 'next/link'
import Date from '../components/Date/date'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{Constants.SITETITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{ Constants.SHORTINTRODUCTION }</p>
        <p>{ Constants.WEBSITEDESCRIPTION } </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}




