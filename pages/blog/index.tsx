import styles from './Blog.module.scss';
import utilStyles from '../../styles/utils.module.scss'
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../../utils/posts';
import { useAppSelector } from '../../redux/hooks';

export type blogPost = {
    date: string
    title: string
    id: string
}

export default function Blog( allPostsData : Array<blogPost> ) {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    
    return (
        
          <div className={isDarkmode ? styles.sectionDark : styles.sectionLight}>
            <p 
              className={`${styles.element} ${utilStyles.title} ${'text-5xl'}`}
            >
              Coming sooooonn
            </p>                
          </div>
        
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