import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image';

type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
	return (
		<div className='box-border max-w-max border-2 border-red-100 shadow-lg overflow-hidden rounded-tl-lg rounded-bl-lg h-full'>
			<Image className='rounded-tl-lg' alt='Product' src={product.image} layout='fixed' width={250} height={175} />
			<div className='p-2'>
				<p className='text-orange-700'>{product.description}</p>
				<p className='text-green-500'>{product.price}$</p>
				<p className='font-bold text-amber-500'>{product.rating}★</p>
			</div>
		</div>
	);
};

export default ProductCard;
