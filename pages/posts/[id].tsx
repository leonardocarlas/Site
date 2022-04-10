import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './../../styles/pages-styles/Post.module.scss';

export default function Post() {

    const router = useRouter();
    const { id } = router.query;

	return (
	<>
		<Head>
			<title>Post {id} | Leonardo Carlassare</title>
		</Head>
		<h1>Post {id} </h1>
		<h2>
			<Link href = "/">
				<a>Back to home</a>
			</Link>
		</h2>
	</>
	)
	
}
