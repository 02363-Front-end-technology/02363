import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image';

/** contributors
 * Tobias Maneschijn
 * 
 */

type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
	const color = "red"
	return (
		<div
			className={
				`group box-border h-full max-w-max overflow-hidden rounded-tl-lg rounded-br-lg border-2 border-${color}-100 shadow-lg shadow-${color}-100/50` +
				`transform transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-${color}-200 hover:shadow-lg ` +
				`hover:cursor-pointer`
			}
		>

			<Image
				className='rounded-tl-lg rounded-br-lg transition duration-150 ease-in-out  group-hover:brightness-125'
				alt='Product'
				src={product.image}
				layout='fixed'
				objectFit='cover'
				width={250 * 1.5}
				height={175 * 1.5}
			/>
			<div className='p-2'>
				<p className={`text-orange-700 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-${color}-600`}>{product.description}</p>
				<p className={`text-green-500 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-${color}-600`}>{product.price}$</p>
				<p className={`font-bold text-amber-500 transition duration-150 ease-in-out  group-hover:animate-pulse group-hover:text-${color}-600`}>{product.rating}★</p>
			</div>
		</div>
	);
};

export default ProductCard;
