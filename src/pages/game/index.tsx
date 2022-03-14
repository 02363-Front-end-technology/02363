import React, { useState } from 'react';
import { IUser } from '@Interfaces/index';
import { EView, Tab } from '@Interfaces/enums';
import { useGameData } from 'src/hooks/useGameData';
import { useRouter } from 'next/router';
import UpgradeLayout from '@Components/Layouts/UpgradeLayout';
import WebsiteLayout from '@Components/Layouts/WebsiteLayout';

type Props = {
	users: IUser[];
};


const IndexPage: React.FC<Props> = ({ users }) => {
	const router = useRouter();

	const [data, fetching, error] = useGameData({ userId: router.query.uuid as string });
	const [activeTab, setActiveTab] = useState<Tab>(Tab.Frontend);
	const [selectedView, setSelectedView] = useState<EView>(EView.UPGRADELAYOUT);


	if (fetching) return <> Loading... </>;

	if (error) {
		return <> {error.message} </>;
	}

	if(data === undefined){
		return <> data is undefined </>
	}

	const gameData = data[0];

	const onClick = () => {
	  if (selectedView === EView.WEBSITELAYOUT) setSelectedView(EView.UPGRADELAYOUT);
		if (selectedView === EView.UPGRADELAYOUT) setSelectedView(EView.WEBSITELAYOUT);
	}
	return (
		<>
			{selectedView === EView.UPGRADELAYOUT && <UpgradeLayout gameData={gameData} activeTab={activeTab} setActiveTab={setActiveTab} />}
			{selectedView === EView.WEBSITELAYOUT && <WebsiteLayout />}
			<button onClick={onClick}>Switch view</button>
		</>
	);
};

export default IndexPage;
