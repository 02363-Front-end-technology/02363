import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image'


type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {


	return <div className='max-w-max box-border border-2 border-red-100 shadow-lg'>
        <Image
      alt="Product"
      src={product.image}
      layout="fixed"
      width={150}
      height={175}
    />

    <div className='space-y-3 space-x-2'>
        <p className='text-orange-700'>{product.description}</p>

        <p className='text-green-500'>{product.price}$</p>

        <p className='text-amber-500 font-bold'>{product.rating}★</p>
    </div>


</div>;


};

export default ProductCard;
