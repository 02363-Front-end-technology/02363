/** contributors
 * Oliver Christensen
 * Loui
 */

import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Stack } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserGameData, currentUserIdState } from '../../atoms';
import { axiosInstance } from '@Utils/axiosInstance';
import { useRouter } from 'next/router';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
};

const GameSettingsModal: React.FC<IProps> = ({ isOpen, onClose }) => {
	const currentGameUserId = useRecoilValue(currentUserIdState);
	const [currentUserGamedata, setCurrentUserGamedata] = useRecoilState(currentUserGameData);
	const router = useRouter();

	const onResetGameData = () => {
		axiosInstance.patch(`api/reset/${currentGameUserId}`).then((r) => {
			setCurrentUserGamedata(r.data);
		});
		router.reload();
	};

	const onLeaveGame = () => {
		axiosInstance.patch(`api/upgrades/${currentUserGamedata.id}`, { gameData: currentUserGamedata }).then(() => {
			router.replace('/');
			sessionStorage.clear();
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Game settings</ModalHeader>
				<ModalCloseButton data-cy='close-settings' />
				<ModalBody className='my-6'>
					<Stack direction='column' spacing={4} align='center'>
						<button onClick={onLeaveGame} data-cy='leave-game' className='warning btn'>
							Leave Game
						</button>
						<button data-cy='reset-game' className='danger btn' onClick={onResetGameData}>
							Reset Game
						</button>
						<button data-cy='delete-game' className='danger btn' disabled={true}>
							Delete Game
						</button>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
export default GameSettingsModal;
