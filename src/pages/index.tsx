import Link from 'next/link';
import Layout from "@Components/Layouts/Layout";

const IndexPage = () => {
	return (
		<Layout>
			<div className='space-x-6'>
				<Link href='/new-game'>
					<a className='my-button'>New Game</a>
				</Link>

				<Link href='/load-game'>
					<a className='my-button'>Load Game</a>
				</Link>
			</div>
		</Layout>
	);
};

export default IndexPage;
