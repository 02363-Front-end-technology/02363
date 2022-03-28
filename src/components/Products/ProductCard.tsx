import React from 'react';
import { IProduct } from '@Interfaces/index';
import Image from 'next/image'


type IProps = {
	product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {


	return <div className='max-w-max'>
        <Image
      alt="Product"
      src={product.image}
      layout="fixed"
      width={150}
      height={175}
    />

    <div>
        <p>{product.description}</p>

        <p>{product.price}</p>

        <p>{product.rating}</p>
    </div>


</div>;


};

export default ProductCard;
