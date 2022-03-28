import React, { Dispatch, SetStateAction } from 'react';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import { Tab } from '@Interfaces/enums';
import { IGameData } from '@Interfaces/index';
import RealTimeChart from '@Components/charts/RealTimeChart';
import style from '@Styles/UpgradeLayout.module.css';

type IProps = {
	gameData: IGameData;
	activeTab: Tab;
	setActiveTab: Dispatch<SetStateAction<Tab>>;
};

const UpgradeLayout: React.FC<IProps> = ({ gameData, activeTab, setActiveTab }) => {
	return (
		<div style={{"height": "100%"}}>
			<TopGameBar balance={gameData.balance} />
			<div className={style.layout}>
				<div className={style.container}>
					<div className={style.left}>
						<Categories activeTab={activeTab} setActiveTab={setActiveTab}>
							<UpgradeList categoryData={gameData.items.find((e) => e.label == activeTab)} onClickCallback={() => console.log('test')} />
						</Categories>
					</div>
					<div className={style.right}>
						<div>
							<RealTimeChart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpgradeLayout;
