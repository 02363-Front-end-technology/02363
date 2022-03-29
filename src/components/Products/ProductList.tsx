import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image';
import ProductCard from './ProductCard';

type IProps = {
	products: IProduct[];
};

const ProductList: React.FC<IProps> = ({ products }) => {
	return (
		<div className='my-12 w-full grid grid-cols-1 gap-4 sm:grid-cols-4 justify-items-center'>
			{products.map((p, index) => (
				<ProductCard key={index} product={p} />
			))}
		</div>
	);
};

export default ProductList;
