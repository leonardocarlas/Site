import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import utilStyles from '../styles/utils.module.scss'
import { Constants } from '../constants/constants';
import { getSortedPostsData } from '../utils/posts'
import { GetStaticProps } from 'next/types'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {Util} from '../utils/util'


export default function Home() {
  let router = useRouter();
  let t = Util.getLocale(router);
  console.log(t);

  return (

    <div>
      <Head>
        <title>{Constants.SITETITLE}</title>
      </Head>

      <p>Home page</p>

      <p>{t?.intro}</p>
      
    </div>
  )
  
}





