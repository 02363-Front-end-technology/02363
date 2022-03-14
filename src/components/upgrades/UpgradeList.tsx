import React from 'react';
import { ICategoryData, IUpgrade, IUpgradeItem } from '@Interfaces/index';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';

type IProps = {
	upgrades: ICategoryData;
	onClickCallback: () => void;
};

const UpgradeList: React.FC<IProps> = ({ upgrades, onClickCallback }) => {
	return (
		<div className='flex flex-col p-6 space-y-6 bg-white divide-y shadow-lg rounded-xl'>
			{upgrades.upgrades.map((u) => (
				<SingleUpgrade key={u.label} title={u.label} price={u.price} onClickCallback={onClickCallback} isBought={u.isBought} />
			))}
		</div>
	);
};

export default UpgradeList;
