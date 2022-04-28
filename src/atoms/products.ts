/** contributors
 * Loui
 */
import { IProduct } from '@Interfaces/index';
import faker from '@faker-js/faker';
import { atom } from 'recoil';

const makeRandomProducts = async (amount: number): Promise<IProduct[]> => {
	const products: IProduct[] = [];

	for (let i = 0; i < amount; i++) {
		products[i] = {
			image: faker.image.cats(720, 720, true),
			description: faker.commerce.productName(),
			price: Number(faker.commerce.price()),
			rating: Math.ceil(Math.random() * 5),
		};
	}
	return products;
};

export const randomProductState = atom<IProduct[]>({
	key: 'randomProductState',
	default: makeRandomProducts(100)
});
