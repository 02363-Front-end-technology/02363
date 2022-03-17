import React from 'react';
import { IUpgradeItem } from '@Interfaces/index';
import NavBar from '@Components/layouts/NavBar';

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
