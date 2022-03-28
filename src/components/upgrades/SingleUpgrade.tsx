import React, { useState } from 'react';

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
				<button className={isBought ? 'btn small inactive' : 'btn small'} disabled={isBought} onClick={onClickCallback}>
					{isBought ? 'Bought' : 'Buy'}
				</button>
			</div>
		</div>
	);
};

export default SingleUpgrade;
