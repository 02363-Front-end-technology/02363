/** contributors
 * Loui
 * Tobias Maneschijn
 */
import { IGameData } from '@Interfaces/index';

const allItemsUpgradedGameData: Partial<IGameData> = {
	balance: 100,
	items: [
		{
			label: 'Frontend',
			upgrades: [
				{
					id: 0,
					label: 'Webshop',
					isBought: true,
					multiplier: 0.020,
					price: 125
				},
				{
					id: 1,
					label: 'Navigation Bar',
					isBought: true,
					multiplier: 0.025,
					price: 150
				},
				{
					id: 2,
					label: 'User Profile',
					isBought: true,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 3,
					label: 'Sidebar',
					isBought: true,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 4,
					label: 'Footer',
					isBought: true,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 5,
					label: 'Product Sorting',
					isBought: true,
					multiplier: 0.05,
					price: 450
				}
			]
		},
		{
			label: 'Server',
			upgrades: [
				{
					id: 0,
					label: 'RAM',
					level: 0,
					multiplier: 0.025,
					price: 150
				},
				{
					id: 1,
					label: 'CPU',
					level: 0,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 2,
					label: 'Network',
					level: 0,
					multiplier: 0.05,
					price: 300
				}
			]
		},
		{
			label: 'Ads',
			upgrades: [
				{
					id: 0,
					label: 'Adblocker',
					isBought: true,
					cps: 1.5,
					price: 100
				},
				{
					id: 1,
					label: 'Ad 2',
					isBought: true,
					cps: 2,
					price: 150
				},
				{
					id: 2,
					label: 'Ad 3',
					isBought: true,
					cps: 3,
					price: 200
				},
				{
					id: 3,
					label: 'Ad 4',
					isBought: true,
					cps: 4,
					price: 300
				}
			]
		},
		{
			label: 'Color',
			upgrades: [
				{
					id: 0,
					label: 'Red',
					isBought: true,
					cps: 0.2,
					price: 100
				},
				{
					id: 1,
					label: 'Green',
					isBought: true,
					cps: 0.2,
					price: 100
				},
				{
					id: 2,
					label: 'Blue',
					isBought: true,
					cps: 0.2,
					price: 100
				},
				{
					id: 3,
					label: 'Yellow',
					isBought: true,
					cps: 0.2,
					price: 100
				}
			]
		}
	]
};

export default allItemsUpgradedGameData;
