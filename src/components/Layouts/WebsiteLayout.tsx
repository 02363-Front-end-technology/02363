import React, { Dispatch, SetStateAction } from 'react';
import TopGameBar from '@Components/TopGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import { Tab } from '@Interfaces/enums';
import { IGameData } from '@Interfaces/index';
import NavBar from '@Components/Layouts/NavBar';

type IProps = {
}

const UpgradeLayout: React.FC<IProps> = () => {
	return (
		<>
			<NavBar/>
		</>);

};

export default UpgradeLayout;
