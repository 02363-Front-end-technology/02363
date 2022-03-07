import React from 'react';
import { IUpgrade } from '@Interfaces/index';
import SingleUpgrade from '@Components/upgrades/SingleUpgrade';

type IProps = {
	upgrades: IUpgrade[];
	onClickCallback: () => void;
};

const UpgradeList: React.FC<IProps> = ({ upgrades, onClickCallback }) => {
	return (
		<div className='mx-auto flex flex-col max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-lg'>
			{upgrades.map((u) => (
				<SingleUpgrade key={u.id} title='Title' price={100} onClickCallback={onClickCallback} isBought={false} />
			))}
		</div>
	);
};

export default UpgradeList;
