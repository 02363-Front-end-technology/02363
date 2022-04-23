import React, { useEffect, useState } from 'react';
import { EView } from '@Interfaces/enums';
import { useRouter } from 'next/router';
import UpgradeLayout from '@Components/layouts/UpgradeLayout';
import WebsiteLayout from '@Components/layouts/WebsiteLayout';
import { FiShoppingCart } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import GameSettingsModal from '@Components/modals/GameSettingsModal';
import { BsGear } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { currentUserGameData, currentUserIdState } from '../../atoms';
import { axiosInstance } from '@Utils/axiosInstance';
import { EApiStatus } from '@Interfaces/apiStates';

const IndexPage = () => {
	const router = useRouter();

	const [selectedView, setSelectedView] = useState<EView>(EView.UPGRADELAYOUT);
	const [isGameSettingsOpen, setIsGameSettingsOpen] = useState(false);
	const [APIcallState, setAPIcallState] = useState(EApiStatus.ready);
	const setCurrentUserId = useSetRecoilState(currentUserIdState);
	const setCurrentUserGameData = useSetRecoilState(currentUserGameData);

	useEffect(() => {
		if (router.isReady && router.query.uuid) {
			setCurrentUserId(router.query.uuid as string);
			setAPIcallState(EApiStatus.loading);
			axiosInstance.get(`api/users/${router.query.uuid}`).then(res => {
				axiosInstance.get(`api/upgrades/${res.data['upgrades_id']}`).then(res => {
					setCurrentUserGameData(res.data);
					setAPIcallState(EApiStatus.success);
				}).catch(() => setAPIcallState(EApiStatus.error));
			}).catch(() => setAPIcallState(EApiStatus.error));
		}
	}, [router.query.uuid, setCurrentUserId, setCurrentUserGameData, router.isReady]);

	if (APIcallState === EApiStatus.loading) {
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
	if (APIcallState === EApiStatus.error) {
		return <>Did you use a correct uuid?</>;
	}


	const onClick = () => {
		if (selectedView === EView.WEBSITELAYOUT) setSelectedView(EView.UPGRADELAYOUT);
		if (selectedView === EView.UPGRADELAYOUT) setSelectedView(EView.WEBSITELAYOUT);
	};

	return (
		<div className='relative h-screen max-h-screen overflow-y-hidden'>
			{selectedView === EView.UPGRADELAYOUT && <UpgradeLayout />}
			{selectedView === EView.WEBSITELAYOUT && <WebsiteLayout />}
			<button
				className='fixed bottom-6 right-6 z-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-black text-center'
				onClick={onClick}>
				{selectedView === EView.WEBSITELAYOUT && <FiShoppingCart className='z-10 h-6 w-6' />}
				{selectedView === EView.UPGRADELAYOUT && <CgWebsite className='z-10 h-6 w-6' />}
			</button>
			<button
				className='fixed bottom-6 left-6 z-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-black text-center'
				onClick={() => setIsGameSettingsOpen(true)}
				data-cy='settings'
			>
				<BsGear className='z-10 h-6 w-6' />
			</button>
			<GameSettingsModal isOpen={isGameSettingsOpen} onClose={() => setIsGameSettingsOpen(false)} />
		</div>
	);
};

export default IndexPage;
