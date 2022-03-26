import React, { useEffect, useState } from 'react';
import { IUser } from '@Interfaces/index';
import { EView } from '@Interfaces/enums';
import { useGameData } from 'src/hooks/useGameData';
import { useRouter } from 'next/router';
import UpgradeLayout from '@Components/layouts/UpgradeLayout';
import WebsiteLayout from '@Components/layouts/WebsiteLayout';
import { FiShoppingCart } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import GameSettingsModal from '@Components/modals/GameSettingsModal';
import { BsGear } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { currentUserIdState } from '../../atoms';

type Props = {
	users: IUser[];
};

const IndexPage: React.FC<Props> = ({ users }) => {
	const router = useRouter();

	const [data, fetching, error] = useGameData({ userId: router.query.uuid as string });
	const [selectedView, setSelectedView] = useState<EView>(EView.UPGRADELAYOUT);
	const [isGameSettingsOpen, setIsGameSettingsOpen] = useState(false);
	const setCurrentUserId = useSetRecoilState(currentUserIdState);

	useEffect(() => {
		setCurrentUserId(router.query.uuid as string);
	}, [router.query.uuid, setCurrentUserId]);

	if (fetching) {
		return (
			<div className='loading'>
				<div className='lds-ring'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
	if (error) {
		return <> {error.message} </>;
	}

	if (data === undefined) {
		return <> data is undefined </>;
	}



	const gameData = data[0];

	const onClick = () => {
		if (selectedView === EView.WEBSITELAYOUT) setSelectedView(EView.UPGRADELAYOUT);
		if (selectedView === EView.UPGRADELAYOUT) setSelectedView(EView.WEBSITELAYOUT);
	};

	return (
		<div className='relative h-screen max-h-screen overflow-y-hidden'>
			{selectedView === EView.UPGRADELAYOUT && <UpgradeLayout gameData={gameData} />}
			{selectedView === EView.WEBSITELAYOUT && <WebsiteLayout frontendItems={gameData.items[0].upgrades} />}
			<div className='fixed bottom-6 right-6 z-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-black text-center' onClick={onClick}>
				{selectedView === EView.WEBSITELAYOUT && <FiShoppingCart className='z-10 h-6 w-6' />}
				{selectedView === EView.UPGRADELAYOUT && <CgWebsite className='z-10 h-6 w-6' />}
			</div>
			<div
				className='fixed bottom-6 left-6 z-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-black text-center'
				onClick={() => setIsGameSettingsOpen(true)}
			>
				<BsGear className='z-10 h-6 w-6' />
			</div>
			<GameSettingsModal isOpen={isGameSettingsOpen} onClose={() => setIsGameSettingsOpen(false)} onResetGameData={() => console.log(localStorage.getItem('currentUser'))} />
		</div>
	);
};

export default IndexPage;
