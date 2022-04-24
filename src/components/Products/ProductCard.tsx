import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image';

type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
	return (
		<div className='group box-border h-full max-w-max overflow-hidden rounded-tl-lg rounded-br-lg border-2 border-red-100 shadow-lg shadow-red-100
		transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:border-red-200 
		hover:cursor-pointer		
		'>
			<Image className='rounded-tl-lg rounded-br-lg transition duration-150 ease-in-out  group-hover:brightness-125' alt='Product' src={product.image} layout='fixed' objectFit='cover' width={250*1.5} height={175*1.5} />
			<div className='p-2'>
				<p className='text-orange-700 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-red-600'>{product.description}</p>
				<p className='text-green-500 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-red-600'>{product.price}$</p>
				<p className='font-bold text-amber-500 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-red-600'>{product.rating}★</p>
			</div>
		</div>
	);
};

export default ProductCard;
