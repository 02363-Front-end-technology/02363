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
import { useGameData } from 'src/hooks/useGameData';
import style from '@Styles/TopBar.module.css';
import { useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors/upgrades';


const TopGameBar = () => {
	const currentUserBalance = useRecoilValue(currentUserBalanceQuery);

	return (
		<div className={style.topBar}>
			<div className={style.title}>
				IDLE GAME
			</div>
			<div className={style.item}>
				Balance <div className={style.value}>${currentUserBalance}</div>
			</div>
			<div className={style.item}>
				CPS <div className={style.value}>${0}</div>
			</div>
		</div>

	);
};
export default TopGameBar;
