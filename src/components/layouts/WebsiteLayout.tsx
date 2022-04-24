import React from 'react';
import NavBar from '@Components/layouts/NavBar';
import Ad from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import { useRecoilValue } from 'recoil';
import { currentUserGameData, randomProductState } from '../../atoms';
import ProductList from '@Components/Products/ProductList';

const UpgradeLayout = () => {
	const frontendItems = useRecoilValue(currentUserGameData).items[0].upgrades;
	const adds = useRecoilValue(currentUserGameData).items[2].upgrades;
	const products = useRecoilValue(randomProductState);

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
				{frontendItems[0].isBought && <ProductList products={products} />}
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
