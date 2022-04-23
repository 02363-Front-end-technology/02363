import React from 'react';
import NavBar from '@Components/layouts/NavBar';
import Add from './Add';
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
				<div className={style.container}>
					{adds[0].isBought && <Add src='/AddblockAdd.png' />}
					{adds[1].isBought && <Add src='/AddblockAdd.png' />}
				</div>
				{frontendItems[0].isBought && <ProductList products={products} />}
			</div>
		</div>
	);
};

export default UpgradeLayout;
