import { getAllPostIds, getPostData } from '../../utils/posts';
import { GetStaticPaths, GetStaticProps } from 'next';


export default function Post() 
{
	return (
		<>
		</>
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
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	}
}