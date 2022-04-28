/** contributors
 * Loui
 */
import React from 'react';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';
import { useRecoilValue } from 'recoil';
import { filteredUpgradesState } from '../../selectors';

const UpgradeList = () => {
	const selectedUpgradesTab = useRecoilValue(filteredUpgradesState);

	return (
		<div className='flex flex-col space-y-6 divide-y rounded-xl bg-white p-6 shadow-lg'>
			{selectedUpgradesTab.map((u) => (
				<SingleUpgrade key={u.label} id={u.id} title={u.label} price={u.price} isBought={u.isBought} level={u.level} />
			))}
		</div>
	);
};

export default UpgradeList;
