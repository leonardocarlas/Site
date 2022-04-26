import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './Post.module.scss';
import { getAllPostIds, getPostData } from '../../utils/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout/layout';
import Date from '../../components/Date/date';
import { constants } from 'buffer';



export default function Post(
	{
		postData
  	} : {
		postData: {
	  		title: string
	  		date: string
	  		contentHtml: string
		}
  	}) 
{
	return (
	  <Layout>
		<Head>
		  <title>{postData.title} | Leonardo Carlassare</title>
		</Head>
		<article>
		  <h1 className={styles.headingXl}>{postData.title}</h1>
		  <div className={styles.lightText}>
			<Date dateString={postData.date} />
		  </div>
		  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	  </Layout>
	)
  }

  export const getStaticProps: GetStaticProps = async ({ params }) => {

	const postData = await getPostData(params!.id as string);

	return {
	  props: {
		postData
	  }
	}
  }


  export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
	  paths,
	  fallback: false
	}
  }