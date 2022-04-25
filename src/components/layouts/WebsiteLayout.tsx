import React, { useState } from 'react';
import NavBar from '@Components/layouts/NavBar';
import Ad from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import { useRecoilValue } from 'recoil';
import { currentUserGameData, randomProductState } from '../../atoms';
import ProductList from '@Components/Products/ProductList';
import ProductTools from '@Components/Products/ProductTools';
import { IProduct } from '../../interfaces/index';

const UpgradeLayout = () => {
	const frontendItems = useRecoilValue(currentUserGameData).items[0].upgrades;
	const adds = useRecoilValue(currentUserGameData).items[2].upgrades;
	const products = useRecoilValue(randomProductState);

	const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
	const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('ascending');
	const onSortChange = (e) => {
		console.log(e.target.value);
		setSortBy(e.target.value);
	};

	const onDirChange = (e) => {
		console.log(e.target.value);
		setSortDirection(e.target.value);
	};

	/**
	 *  @param {string} sortBy
	 */
	const sortProducts = ({ products, sortBy, dir }: { products: IProduct[]; sortBy: 'name' | 'price' | 'rating'; dir: 'ascending' | 'descending' }) => {
		const newProducts = [...products];
		if (sortBy === 'price') {
			if (dir === 'ascending') {
				return newProducts.sort((a, b) => a.price - b.price);
			} else {
				return newProducts.sort((a, b) => b.price - a.price);
			}
		}
		if (sortBy === 'name') {
			if (dir === 'ascending') {
				return newProducts.sort((a, b) => a.description.localeCompare(b.description));
			} else {
				return newProducts.sort((a, b) => b.description.localeCompare(a.description));
			}
		}
		if (sortBy === 'rating') {
			if (dir === 'ascending') {
				return newProducts.sort((a, b) => a.rating - b.rating);
			} else {
				return newProducts.sort((a, b) => b.rating - a.rating);
			}
		}
	};

	return (
		<div style={{ height: '100%' }}>
			<TopGameBar />
			<div className={style.layout}>
				{frontendItems[1].isBought && <NavBar />}
				<span className='flex max-h-96  w-full bg-slate-800 '>
					<div className={'w-full '}>
						{
							// Photo by Abd Elrahman Elokby from Pexels: https://www.pexels.com/photo/stylish-female-standing-with-glass-of-soda-on-street-6779997/
							adds[0].isBought && <Ad title={'GET YOUR CLOTHES AT OSAS'} src='/ad_2.jpg' />
						}
					</div>
				</span>
				{frontendItems[5].isBought && <ProductTools defaultDirValue='descending' defaultSortValue='name' onDirChange={onDirChange} onSortChange={onSortChange} />}

				{frontendItems[0].isBought && <ProductList products={sortProducts({ products: products, sortBy: sortBy, dir: sortDirection })} />}
				<div className={'w-full '}>
					{
						// Photo by Engin Akyurt: https://www.pexels.com/photo/a-delicious-burger-on-paper-placemat-5374421/
						adds[1].isBought && <Ad title={"Frankie's Steak House"} src='/ad_3.jpg' />
					}
				</div>
			</div>
		</div>
	);
};

export default UpgradeLayout;
