import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image'
import ProductCard from './ProductCard';


type IProps = {
	products: IProduct[];
};

const ProductList: React.FC<IProps> = ({ products }) => {


	return <div className="w-full grid grid-cols-1 sm:grid-cols-4" >
        {products.map((p,index)=>(<ProductCard key={index} product={p}/>))}

	</div>;


};

export default ProductList;
