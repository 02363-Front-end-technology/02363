import React, { useEffect } from 'react';
import style from '@Styles/TopBar.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors/upgrades';
import { currentUserCPS, currentUserMultiplier } from '../../selectors';

const TopGameBar = () => {
	const [balance, setBalance] = useRecoilState(currentUserBalanceQuery);
	const multiplier = useRecoilValue(currentUserMultiplier);
	const cps = useRecoilValue(currentUserCPS);

	//TODO update balance every second
		useEffect(() => {
				const interval = setInterval(() => {
					setBalance(balance + (cps * (1 + multiplier)));
				}, 1000);
				return () => clearInterval(interval);
			}, [balance, cps, multiplier, setBalance]);

	return (
		<div className={style.topBar}>
			<div className={style.title}>IDLE GAME</div>
			<div className={style.item}>
				Balance <div data-cy='currentBalance' className={style.value}>${balance.toFixed(2)}</div>
			</div>
			<div className={style.item}>
				CPS <div data-cy='currentCPS' className={style.value}>${cps}</div>
			</div>
			<div>
				<div className={style.item}>
					Multiplier <div data-cy='currentMultiplier' className={style.value}>{multiplier.toFixed(3)}</div>
				</div>
			</div>
		</div>
	);
};
export default TopGameBar;
