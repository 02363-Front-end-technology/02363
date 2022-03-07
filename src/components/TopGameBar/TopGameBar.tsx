import React from 'react';

import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

type Props = {};

export default function TopGameBar() {
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
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const labelColor = useColorModeValue('white', 'gray.200');
	const subLabelColor = useColorModeValue('gray.800', 'white');

	const dataBgColor = useColorModeValue('white', 'black');

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Stack direction={'row'} spacing={4} key={navItem.label}>
					<Box>
						<Text p={2} fontSize={'sm'} fontWeight={'bold'} color={labelColor}>
							{navItem.label}
						</Text>
					</Box>
					<Box width={'16'} alignContent={'center'} textAlign={'center'} bgColor={dataBgColor} borderRadius={'full'}>
						<Text p={2} fontSize={'sm'} fontWeight={500} color={subLabelColor}>
							{'$ ' + navItem.subLabel}
						</Text>
					</Box>
				</Stack>
			))}
		</Stack>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
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

const NAV_ITEMS: Array<DataItem> = [
	{
		label: 'Cash',
		subLabel: '100'
	},
	{
		label: 'CPS',
		subLabel: '20'
	}
];
