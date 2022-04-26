import styles from './Blog.module.scss';
import utilStyles from '../../styles/utils.module.scss'
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../../utils/posts';
import Link from 'next/link';
import Date from '../../components/Date/date';

export type blogPost = {
    date: string
    title: string
    id: string
}

export default function Blog( allPostsData : Array<blogPost> ) {

    
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                
                </ul>
            </section>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

  /*

  {allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
    <Link href={`/posts/${id}`}>
        <a>{title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
        <p>Date</p>
    </small>
    </li>
))}

  */