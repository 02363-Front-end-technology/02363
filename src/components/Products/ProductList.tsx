import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image'
import ProductCard from './ProductCard';


type IProps = {
	products: IProduct[];
};

const ProductList: React.FC<IProps> = ({ products }) => {


	return <div>
        {products.map((p)=><ProductCard product={p}/>)}

	</div>;

    
};

export default ProductList;