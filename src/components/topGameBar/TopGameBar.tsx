import React from 'react';
import style from '@Styles/TopBar.module.css';
import { useRecoilValue } from 'recoil';
import { currentUserBalanceQuery } from '../../selectors/upgrades';
import { currentUserMultiplier } from '../../selectors';


const TopGameBar = () => {
	const balance = useRecoilValue(currentUserBalanceQuery);
	const multiplier = useRecoilValue(currentUserMultiplier)

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
};
export default TopGameBar;
