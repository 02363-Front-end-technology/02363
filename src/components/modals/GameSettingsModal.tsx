import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';

type IProps = {
	isOpen: boolean;
	onClose: () => void;
}

const GameSettingsModal: React.FC<IProps> = ({isOpen, onClose}) => {

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay/>
			<ModalContent>
				<ModalHeader>Game settings</ModalHeader>
				<ModalCloseButton/>
				<ModalBody className='space-y-4 my-6'>
					<p>Reset game data</p>
					<p>Something else</p>
					<p>Something else</p>
					<p>Something else</p>
					<p>Something else</p>
				</ModalBody>
			</ModalContent>
		</Modal>);

};

export default GameSettingsModal;
