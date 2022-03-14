import React, { useState } from 'react';
import Button from '@Components/Button';

type IProps = {
	title: string;
	price: number;
	onClickCallback: () => void;
	isBought: boolean;
};

const SingleUpgrade: React.FC<IProps> = ({ title, price, onClickCallback, isBought }) => {
	return (
		<div className='flex items-center justify-between p-2'>
			<span>{title}</span>
			<div className='flex inline-flex items-center space-x-2'>
				<span className='font-bold'>${price}</span>
				<Button className='rounded-xl border border-red-600 px-6 py-1' disabled={isBought} onClick={onClickCallback}>
					{isBought ? 'Bought' : 'Buy'}
				</Button>
			</div>
		</div>
	);
};

export default SingleUpgrade;
