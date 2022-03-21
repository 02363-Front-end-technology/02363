import React from 'react';
import { IProduct, IUpgradeItem } from '@Interfaces/index';
import NavBar from '@Components/layouts/NavBar';
import ProductCard from '@Components/Products/ProductCard';
import ProductList from '@Components/Products/ProductList';

type IProps = {
	frontendItems: IUpgradeItem[];
};


const products:IProduct[]= [{
	image: '/ducks.jpg',
	description: 'ducks',
	price: 1000,
	rating: 10
}, {
	image: '/ducks.jpg',
	description: 'ducks',
	price: 1000,
	rating: 10
}]
const UpgradeLayout: React.FC<IProps> = ({ frontendItems }) => {
	//TODO måske et Map med items som skal renders?

	return <>
		{frontendItems[0].isBought && <NavBar />}
		<ProductList products={products}/>
	</>;
};

export default UpgradeLayout;
