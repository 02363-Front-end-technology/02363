import Layout from '@Components/Layouts/Layout';
import React from 'react';

import { IUpgrade, IUser } from '@Interfaces/index';
import UpgradeList from '@Components/upgrades/UpgradeList';

interface IFormInput {
	uuid: string;
}

type Props = {
	users: IUser[];
};

const mockUpgrade: IUpgrade[] = [
	{
		id: '1',
		user_id: 's',
		upgrades: {
			item1: 1
		}
	},
	{
		id: '1',
		user_id: 's',
		upgrades: {
			item1: 1
		}
	}
];

const IndexPage: React.FC<Props> = ({ users }) => {
	return (
		<>
			<UpgradeList upgrades={mockUpgrade} onClickCallback={() => console.log("test")} />
		</>
	);
};

export default IndexPage;
