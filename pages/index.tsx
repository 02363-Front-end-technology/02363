import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<h1>Større missekat 👋</h1>
		<p>
			<Link href='/about'>
				<a>About</a>
			</Link>

			<Link href='/about'>
				<a>Something</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
