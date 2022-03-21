import React from 'react';
import { IUpgradeItem } from '@Interfaces/index';
import NavBar from '@Components/layouts/NavBar';
import Add from './Add';
import style from '@Styles/WebsiteLayout.module.css';
import TopGameBar from '@Components/topGameBar/TopGameBar';

type IProps = {
	frontendItems: IUpgradeItem[];
};

const UpgradeLayout: React.FC<IProps> = ({ frontendItems }) => {
	return (
	<div style={{"height": "100%"}}>
		{/* TODO vis den rigtige balance på denne side også */}
		<TopGameBar balance={0} />
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
