import React from 'react';
import { IUpgrade } from '@Interfaces/index';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';

type IProps = {
	upgrades: IUpgrade[];
	onClickCallback: () => void;
};

const UpgradeList: React.FC<IProps> = ({ upgrades, onClickCallback }) => {
	return (
		<div className='flex flex-col space-y-6 divide-y rounded-xl bg-white p-6 shadow-lg'>
			{upgrades.map((u) => (
				<SingleUpgrade key={u.id} title='Title' price={100} onClickCallback={onClickCallback} isBought={false} />
			))}
		</div>
	);
};

export default UpgradeList;
