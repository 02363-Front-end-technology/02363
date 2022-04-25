import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredUpgradesWebshopState } from '../../selectors';
import SingleWebshopUpgrade from '@Components/upgrades/SingleWebshopUpgrade';

const UpgradeList = () => {
	const selectedUpgradesTab = useRecoilValue(filteredUpgradesWebshopState);

	return (
		<div className='flex flex-col space-y-6 divide-y rounded-xl bg-white p-6 shadow-lg'>
			{selectedUpgradesTab.map((u) => (
				<SingleWebshopUpgrade key={u.label} id={u.id} title={u.label} price={u.price} isBought={u.isBought} />
			))}
		
		</div>
	);
};

export default UpgradeList;
