import React from 'react';
import NavBar from '@Components/layouts/NavBar';
import Add from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import { useRecoilValue } from 'recoil';
import { currentUserGameData } from '../../atoms';

const UpgradeLayout = () => {

	const frontendItems = useRecoilValue(currentUserGameData).items[0].upgrades;
	return (
	<div style={{"height": "100%"}}>
		{/* TODO vis den rigtige balance på denne side også */}
		<TopGameBar />
		<div className={style.layout}>
			{frontendItems[0].isBought && <NavBar />}
			<div className={style.container}>
				<Add src='/AddblockAdd.png'/>
				<Add src='/InvisibleAd.png'/>
			</div>
		</div>
	</div>);
};

export default UpgradeLayout;
