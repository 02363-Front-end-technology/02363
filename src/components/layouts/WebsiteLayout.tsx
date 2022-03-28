import React from 'react';
import { IProduct, IUpgradeItem } from '@Interfaces/index';
import NavBar from '@Components/layouts/NavBar';
import Add from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import ProductCard from '@Components/Products/ProductCard';
import ProductList from '@Components/Products/ProductList';

type IProps = {
	frontendItems: IUpgradeItem[];
};


const products: IProduct[] = [{
	image: '/ducks.jpg',
	description: 'ducks',
	price: 1000,
	rating: 10
}, {
	image: '/ducks.jpg',
	description: 'ducks',
	price: 1000,
	rating: 10
},
	{
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	},
	{
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	},
	{
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}
	, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}, {
		image: '/ducks.jpg',
		description: 'ducks',
		price: 1000,
		rating: 10
	}];
const UpgradeLayout: React.FC<IProps> = ({ frontendItems }) => {
	return (
		<div style={{ 'height': '100%' }}>
			{/* TODO vis den rigtige balance på denne side også */}
			<TopGameBar balance={0} />
			<div className={style.layout}>
				{frontendItems[0].isBought && <NavBar />}
				<div className={style.container}>
					<Add src='/AddblockAdd.png' />
					<Add src='/InvisibleAd.png' />
				</div>
				<div className='w-full'>
					<ProductList products={products} />
				</div>
			</div>
		</div>);
};

export default UpgradeLayout;
