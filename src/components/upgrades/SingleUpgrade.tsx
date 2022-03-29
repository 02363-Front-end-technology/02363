import React from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserGameData } from '../../atoms';

type IProps = {
	title: string;
	price: number;
	isBought: boolean;
	onClickCallback: (item: string) => void;
};

const SingleUpgrade: React.FC<IProps> = ({ title, price, isBought, onClickCallback }) => {
	return (
		<div className='flex items-center justify-between p-2'>
			<span>{title}</span>
			<div className='flex inline-flex items-center space-x-2'>
				<span className='font-bold'>${price}</span>
				<button className={isBought ? 'btn small inactive' : 'btn small'} disabled={isBought} onClick={() => onClickCallback(title)}>
					{isBought ? 'Bought' : 'Buy'}
				</button>
			</div>
		</div>
	);
};

export default SingleUpgrade;
