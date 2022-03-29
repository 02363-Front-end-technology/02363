import React from 'react';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredUpgradesState } from '../../selectors/upgrades';
import { currentUserGameData, upgradeFilterState } from '../../atoms';

const UpgradeList = () => {
	const selectedUpgradesTab = useRecoilValue(filteredUpgradesState);
	const filter = useRecoilValue(upgradeFilterState);

	const [userGameData, setUserGameData] = useRecoilState(currentUserGameData);
	const onclick = (label: string) => {
		const item = userGameData.items.find((item) => item.label === filter).upgrades;
		const upgradeItem = item.find((upgrade) => upgrade.label === label);
		setUserGameData({ ...userGameData,items : [...userGameData.items, userGameData.items[filter].upgrades]  });
	};
	return (
		<div className='flex flex-col space-y-6 divide-y rounded-xl bg-white p-6 shadow-lg'>
			{selectedUpgradesTab.map((u) => (
				<SingleUpgrade key={u.label} title={u.label} price={u.price} isBought={u.isBought} onClickCallback={onclick} />
			))}
		</div>
	);
};

export default UpgradeList;
