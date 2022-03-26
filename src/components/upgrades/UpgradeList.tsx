import React from 'react';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';
import { useRecoilValue } from 'recoil';
import { filteredUpgradesState } from '../../selectors/upgrades';

type IProps = {
	onClickCallback: () => void;
};

const UpgradeList: React.FC<IProps> = ({ onClickCallback }) => {
	const selectedUpgradesTab = useRecoilValue(filteredUpgradesState);

	return (
		<div className='flex flex-col space-y-6 divide-y rounded-xl bg-white p-6 shadow-lg'>
			{selectedUpgradesTab.map((u) => (
				<SingleUpgrade key={u.label} title={u.label} price={u.price} onClickCallback={onClickCallback} isBought={u.isBought} />
			))}
		</div>
	);
};

export default UpgradeList;
