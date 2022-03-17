import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Button, Stack } from '@chakra-ui/react';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
	onResetGameData: () => void;
};

const GameSettingsModal: React.FC<IProps> = ({ isOpen, onClose, onResetGameData }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Game settings</ModalHeader>
				<ModalCloseButton />
				<ModalBody className='my-6'>
					<Stack direction='column' spacing={4} align='center'>
						<Button width='75%' colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button width='75%' colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button width='75%' colorScheme='teal' variant='solid'>
							Button
						</Button>
						<Button width='75%' colorScheme='red' variant='solid' onClick={onResetGameData}>
							Reset game data
						</Button>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default GameSettingsModal;
