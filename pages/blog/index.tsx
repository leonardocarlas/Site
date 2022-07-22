import styles from './Blog.module.scss';
import utilStyles from '../../styles/utils.module.scss'
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../../utils/posts';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';

export type blogPost = {
    date: string
    title: string
    id: string
}

export default function Blog( allPostsData : Array<blogPost> ) {

  let router = useRouter();
  let t = Util.getLocale(router);
  const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    
    return (
        
          <div className={isDarkmode ? styles.sectionDark : styles.sectionLight}>
            <p 
              className={`${styles.element} ${utilStyles.title} ${'text-5xl'}`}
            >
              {t.blog.title}
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
