import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image';

type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
	return (
		<div className='box-border h-full max-w-max overflow-hidden rounded-tl-lg rounded-br-lg border-2 border-red-100 shadow-lg'>
			<Image className='rounded-tl-lg rounded-br-lg' alt='Product' src={product.image} layout='fixed' objectFit='cover' width={250} height={175} />
			<div className='p-2'>
				<p className='text-orange-700'>{product.description}</p>
				<p className='text-green-500'>{product.price}$</p>
				<p className='font-bold text-amber-500'>{product.rating}★</p>
			</div>
		</div>
	);
};

export default ProductCard;
