import React, { Dispatch, SetStateAction } from 'react';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import { ETab } from '@Interfaces/enums';
import { IGameData } from '@Interfaces/index';
import RealTimeChart from '@Components/charts/RealTimeChart';
import style from '@Styles/UpgradeLayout.module.css';
import { useRecoilValue } from 'recoil';
import { filteredUpgradesState } from '../../selectors/upgrades';
import { currentNameQuery } from '../../selectors';

type IProps = {
	gameData: IGameData;
};

const UpgradeLayout: React.FC<IProps> = ({ gameData }) => {
	return (
		<div style={{"height": "100%"}}>
			<TopGameBar balance={gameData.balance} />
			<div className={style.layout}>
				<div className={style.container}>
					<div className={style.left}>
						<Categories>
							<UpgradeList onClickCallback={() => console.log('test')} />
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
