import Link from 'next/link';
import Layout from '@Components/layouts/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<div className='space-x-6'>
				<Link href='/new-game'>
					<a className='my-button' data-cy='new-game'>New Game</a>
				</Link>

				<Link href='/load-game'>
					<a className='my-button' data-cy='load-game'>Load Game</a>
				</Link>
			</div>
		</Layout>
	);
};

export default IndexPage;
