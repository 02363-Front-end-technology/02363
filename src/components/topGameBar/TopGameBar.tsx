import React, { useEffect } from 'react';
import style from '@Styles/TopBar.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors';
import { currentUserCPS, currentUserMultiplier } from '../../selectors';
import { axiosInstance } from '@Utils/axiosInstance';
import { currentUserGameData } from '../../atoms';

const TopGameBar = () => {
	const currentGameData = useRecoilValue(currentUserGameData);
	const [balance, setBalance] = useRecoilState(currentUserBalanceQuery);
	const multiplier = useRecoilValue(currentUserMultiplier);
	const cps = useRecoilValue(currentUserCPS);

	const [addAmount, setAddAmount] = React.useState(0);

	//TODO update balance every second
	useEffect(() => {
		const interval = setInterval(() => {
			setBalance(balance + (cps * (1 + multiplier)));
		}, 1000);
		return () => clearInterval(interval);
	}, [balance, cps, multiplier, setBalance]);

	const onUpdateBalance = () => {
		setBalance(balance + addAmount);
		axiosInstance.patch(`api/upgrades/${currentGameData.id}`, {
			gameData: {
				...currentGameData,
				balance: balance + addAmount
			}
		});
	};

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
			<div className={style.item}>
				<input type='text' data-cy='addMoneyButton' className={style.value} value={addAmount}
							 onChange={(value) => setAddAmount(Number(value.target.value))} />
				<button className='ml-4 text-red-500' onClick={onUpdateBalance}>Add money</button>
			</div>
		</div>
	);
};
export default TopGameBar;
