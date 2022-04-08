import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post() {

    const router = useRouter();
    const { id } = router.query;

	return (
	<>
		<h1>Post {id} </h1>
		<h2>
			<Link href = "/">
				<a>Back to home</a>
			</Link>
		</h2>
	</>
	)
	
}
