import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Link, Stack } from '@chakra-ui/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserGameData, currentUserIdState } from '../../atoms';
import { axiosInstance } from '@Utils/axiosInstance';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
};

const GameSettingsModal: React.FC<IProps> = ({ isOpen, onClose }) => {
	const currentGameUserId = useRecoilValue(currentUserIdState);
	const setCurrentUserGamedata = useSetRecoilState(currentUserGameData);
	const onResetGameData = () => {
		axiosInstance.patch(`api/reset/${currentGameUserId}`).then((r) => {
			setCurrentUserGamedata(r.data);
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
						<Link href='/'>
							<button data-cy='leave-game' className='btn warning'>Leave Game</button>
						</Link>
						<button data-cy='reset-game' className='btn danger' onClick={onResetGameData}>
							Reset Game
						</button>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default GameSettingsModal;
