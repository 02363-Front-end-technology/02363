import React from 'react';

import { Box, Flex, Text, IconButton, Stack, Collapse, useColorModeValue, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useGameData } from 'src/hooks/useGameData';

type Props = {
	balance: number
};

export default function TopGameBar({balance} : Props){
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box>
			<Flex
				bg={useColorModeValue('#990000', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('white', 'black')}>
						IDLE GAME
					</Text>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav balance={balance}  />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav balance={balance} />
			</Collapse>
		</Box>
	);
}

const DesktopNav = ({balance} : Props) => {
	const labelColor = useColorModeValue('white', 'gray.200');
	const subLabelColor = useColorModeValue('gray.800', 'white');
	const dataBgColor = useColorModeValue('white', 'black');

	return (
		<Stack direction={'row'} spacing={4}>
			<Stack direction={'row'} spacing={4}>
					<Box>
						<Text p={2} fontSize={'sm'} fontWeight={'bold'} color={labelColor}>
							Cash
						</Text>
					</Box>
					<Box width={'16'} alignContent={'center'} textAlign={'center'} bgColor={dataBgColor} borderRadius={'full'}>
						<Text p={2} fontSize={'sm'} fontWeight={500} color={subLabelColor}>
							{'$ ' + balance}
						</Text>
					</Box>
				</Stack>
				<Stack direction={'row'} spacing={4} >
					<Box>
						<Text p={2} fontSize={'sm'} fontWeight={'bold'} color={labelColor}>
							CPS
						</Text>
					</Box>
					<Box width={'16'} alignContent={'center'} textAlign={'center'} bgColor={dataBgColor} borderRadius={'full'}>
						<Text p={2} fontSize={'sm'} fontWeight={500} color={subLabelColor}>
							{'$ ' + "0"}
						</Text>
					</Box>
				</Stack>
		</Stack>
	);
};

const MobileNav = ({balance} : Props) => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
				<MobileNavItem label={"Cash"} subLabel={balance.toString()} />
				<MobileNavItem label={"CPS"} subLabel={"0"} />

		</Stack>
	);
};

const MobileNavItem = ({ label, subLabel }: DataItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4}>
			<Flex
				py={2}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none'
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{subLabel}
				</Text>
			</Flex>
		</Stack>
	);
};

interface DataItem {
	label: string;
	subLabel?: string;
}
