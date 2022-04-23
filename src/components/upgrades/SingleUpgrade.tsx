import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserGameData, currentUserIdState, upgradeFilterState } from '../../atoms';
import { axiosInstance } from '@Utils/axiosInstance';
import { currentUserBalanceQuery } from '../../selectors/upgrades';

type IProps = {
	title: string;
	price: number;
	isBought: boolean;
	id: number;
	level?: number;
};

const SingleUpgrade: React.FC<IProps> = ({ title, price, isBought, id, level = undefined }) => {
	const filter = useRecoilValue(upgradeFilterState);
	const currentUserId = useRecoilValue(currentUserIdState);
	const setCurrentUserBalance = useSetRecoilState(currentUserBalanceQuery);
	const [currentGameData, setCurrentGameData] = useRecoilState(currentUserGameData);
	const onBuy = (id: number) => {
		// update current user balance
		axiosInstance.patch(`api/upgrades/${currentGameData.id}`, { gameData: currentGameData });

		axiosInstance
			.get(`api/buy?uuid=${currentUserId}&category=${filter}&itemId=${id}`)
			.then((res) => {
				if (res.data) {
					setCurrentUserBalance(res.data.balance);
					if (res.data.data) {
						setCurrentGameData(res.data.data);
					}
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='flex items-center justify-between p-2'>
			<div className='flex flex-col'>
				<span>{title}</span>
				{level >= 0 && <span data-cy={`${title}-level`}>Level: {level}</span>}
			</div>
			<div className='flex inline-flex items-center space-x-2'>
				<span className='font-bold'>${price.toFixed(0)}</span>
				<button data-cy={title.replace(' ', '')} className={isBought ? 'btn small inactive' : 'btn small'}
								disabled={isBought} onClick={() => onBuy(id)}>
					{isBought ? 'Bought' : 'Buy'}
				</button>
			</div>
		</div>
	);
};

export default SingleUpgrade;
