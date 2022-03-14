import React, { Dispatch, SetStateAction } from 'react';
import TopGameBar from '@Components/TopGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import { Tab } from '@Interfaces/enums';
import { IGameData } from '@Interfaces/index';

type IProps = {
	gameData: IGameData
	activeTab: Tab;
	setActiveTab: Dispatch<SetStateAction<Tab>>;
}

const UpgradeLayout: React.FC<IProps> = ({gameData, activeTab, setActiveTab}) => {
	return (
		<>
			<TopGameBar balance={gameData.balance} />
			<div className='flex'>
				<div className='w-1/3 p-4'>
					<Categories activeTab={activeTab} setActiveTab={setActiveTab}>
						<UpgradeList categoryData={gameData.items.find((e) => e.label == activeTab)} onClickCallback={() => console.log('test')} />
					</Categories>
				</div>
				<div className='w-2/3 bg-blue-600'>
				</div>
			</div>
		</>);

};

export default UpgradeLayout;
