import React from 'react';
import { IProduct } from '@Interfaces/index';
import NavBar from '@Components/layouts/NavBar';
import Add from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import { useRecoilValue } from 'recoil';
import { currentUserGameData } from '../../atoms';
import ProductList from '@Components/Products/ProductList';

const UpgradeLayout = () => {
	const frontendItems = useRecoilValue(currentUserGameData).items[0].upgrades;
	const adds = useRecoilValue(currentUserGameData).items[2].upgrades;
	return (
		<div style={{ height: '100%' }}>
			<TopGameBar />
			<div className={style.layout}>
				{frontendItems[0].isBought && <NavBar />}
				<div className={style.container}>
					{adds[0].isBought && <Add src='/AddblockAdd.png' />}
					{adds[1].isBought && <Add src='/AddblockAdd.png' />}
				</div>
				<ProductList products={products} />
			</div>
		</div>
	);
};

export default UpgradeLayout;

const products: IProduct[] = [
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
	}
];
