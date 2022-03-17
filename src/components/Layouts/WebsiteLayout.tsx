import React, { Dispatch, SetStateAction } from 'react';
import TopGameBar from '@Components/TopGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import { Tab } from '@Interfaces/enums';
import { ICategoryData, IGameData, IUpgrade, IUpgradeItem } from '@Interfaces/index';
import NavBar from '@Components/Layouts/NavBar';

type IProps = {
	frontendItems: IUpgradeItem[];
};

const UpgradeLayout: React.FC<IProps> = ({ frontendItems }) => {
	//TODO måske et Map med items som skal renders?

	return <>
		{frontendItems[0].isBought && <NavBar />}
	</>;
};

export default UpgradeLayout;
