/** contributors
 * Tobias Maneschijn
 * Loui
 * Gülsen
 */

import React from 'react';
import { IProduct } from '@Interfaces/index';
import ProductCard from './ProductCard';

type IProps = {
	products: IProduct[];
};

const ProductList: React.FC<IProps> = ({ products }) => {
	return (
		<div className='my-12 grid w-full grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3'>
			{products.map((p, index) => (
				<ProductCard key={index} product={p} />
			))}
		</div>
	);
};

export default ProductList;
