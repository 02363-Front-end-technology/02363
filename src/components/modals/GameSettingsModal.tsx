import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Link, Stack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { currentUserIdState } from '../../atoms';
import { axiosInstance } from '@Utils/axiosInstance';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
};

const GameSettingsModal: React.FC<IProps> = ({ isOpen, onClose }) => {
	const currentGameUserId = useRecoilValue(currentUserIdState);
	const onResetGameData = () => {
		axiosInstance.patch(`reset/${currentGameUserId}`).then(r =>{
			console.log(r);
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Game settings</ModalHeader>
				<ModalCloseButton />
				<ModalBody className='my-6'>
					<Stack direction='column' spacing={4} align='center'>
						<button className='btn'>
							Button
						</button>
						<button className='btn'>
							Button
						</button>
						<Link href='/'>
							<button className='btn warning'>Leave Game</button>
						</Link>
						<button className='btn danger' onClick={onResetGameData}>
							Reset Game
						</button>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default GameSettingsModal;
