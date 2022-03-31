import React, { useEffect } from 'react';
import style from '@Styles/TopBar.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors/upgrades';
import { currentUserMultiplier } from '../../selectors';
import { useTimeout } from '@chakra-ui/hooks';


const TopGameBar = () => {
		const [balance, setBalance] = useRecoilState(currentUserBalanceQuery);
		const multiplier = useRecoilValue(currentUserMultiplier);

		/*
		TODO update balance every second
		useEffect(() => {
			const interval = setInterval(() => {
				setBalance((balance * multiplier));
			}, 1000);
			return () => clearInterval(interval);
		}, [balance, multiplier]);
*/
		return (
			<div className={style.topBar}>
				<div className={style.title}>
					IDLE GAME
				</div>
				<div className={style.item}>
					Balance <div className={style.value}>${balance}</div>
				</div>
				<div className={style.item}>
					CPS <div className={style.value}>${0}</div>
				</div>
				<div>
					<div className={style.item}>
						Multiplier <div className={style.value}>{multiplier}</div>
					</div>
				</div>
			</div>

		);
	}
;
export default TopGameBar;
