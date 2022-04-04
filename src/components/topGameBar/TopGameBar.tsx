import React from 'react';
import style from '@Styles/TopBar.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors/upgrades';
import { currentUserMultiplier } from '../../selectors';

const TopGameBar = () => {
	const [balance, setBalance] = useRecoilState(currentUserBalanceQuery);
	const multiplier = useRecoilValue(currentUserMultiplier);

	//TODO update balance every second
	/*
		useEffect(() => {
				const interval = setInterval(() => {
					setBalance(((balance + 1) * (1+ multiplier)));
				}, 30000);
				return () => clearInterval(interval);
			}, [balance, multiplier,setBalance]);
	*/
	return (
		<div className={style.topBar}>
			<div className={style.title}>IDLE GAME</div>
			<div className={style.item}>
				Balance <div className={style.value}>${balance.toFixed(2)}</div>
			</div>
			<div className={style.item}>
				CPS <div className={style.value}>${0}</div>
			</div>
			<div>
				<div className={style.item}>
					Multiplier <div className={style.value}>{multiplier.toFixed(2)}</div>
				</div>
			</div>
		</div>
	);
};
export default TopGameBar;
