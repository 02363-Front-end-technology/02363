import Link from 'next/link';

const IndexPage = () => {
	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-700'>
			<div className='space-x-6'>
				<Link href='/new-game'>
					<a className='my-button'>New Game</a>
				</Link>

				<Link href='/load-game'>
					<a className='my-button'>Load Game</a>
				</Link>
			</div>
		</div>
	);
};

export default IndexPage;
