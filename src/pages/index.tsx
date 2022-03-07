import Link from 'next/link';
import Layout from "@Components/Layouts/Layout";
import Categories from '@Components/Categories';
import { Tab } from '@Interfaces/enums';
import { useState } from 'react';

const IndexPage = () => {
	// const [activeTab, setActiveTab] = useState<Tab>(Tab.FRONTEND);

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
			{/* <div>
				<Categories setActiveTab={setActiveTab} activeTab={activeTab} ></Categories>
			</div> */}
		</Layout>
	);
};

export default IndexPage;
