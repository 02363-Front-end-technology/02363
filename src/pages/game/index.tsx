import React, { useState } from 'react';
import { IUpgrade, IUser } from '@Interfaces/index';
import UpgradeList from '@Components/upgrades/UpgradeList';
import TopGameBar from '@Components/TopGameBar/TopGameBar';
import Categories from '@Components/Categories';
import { Tab } from '@Interfaces/enums';
import { useGameData } from 'src/hooks/useGameData';
import { useRouter } from 'next/router';

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
	const router = useRouter();

	const [data, fetching, error] = useGameData({ userId: router.query.uuid as string });
	const [activeTab, setActiveTab] = useState<Tab>(Tab.Frontend);
	
	
	if (fetching) return <> Loading... </>;
	
	if (error) {
		return <> {error.message} </>;
	}

	if(data === undefined){
		return <> data is undefined </>
	}

	const gameData = data[0];
	console.log(data[0]);
	
	return (
		<>
			<TopGameBar balance={gameData.balance} />
			<div className='flex'>
				<div className='w-1/3 p-4'>
					<Categories activeTab={activeTab} setActiveTab={setActiveTab}>
						<UpgradeList categoryData={gameData.items.find((e) => e.label == activeTab)} onClickCallback={() => console.log('test')} />
					</Categories>
				</div>
				<div className='w-2/3 bg-blue-600'></div>
			</div>
		</>
	);
};

export default IndexPage;
