import { IGameData } from '@Interfaces/index';

const defaultGameData: Partial<IGameData> = {
	balance: 100,
	items: [
		{
			label: 'Frontend',
			upgrades: [
				{
					id: 0,
					label: 'Webshop',
					isBought: false,
					multiplier: 0.020,
					price: 125
				},
				{
					id: 1,
					label: 'Navigation Bar',
					isBought: false,
					multiplier: 0.025,
					price: 150
				},
				{
					id: 2,
					label: 'User Profile',
					isBought: false,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 3,
					label: 'Sidebar',
					isBought: false,
					multiplier: 0.05,
					price: 300
				},
				{
					id: 4,
					label: 'Footer',
					isBought: false,
					multiplier: 0.05,
					price: 300
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
					isBought: false,
					cps: 1.5,
					price: 100
				},
				{
					id: 1,
					label: 'Ad 2',
					isBought: false,
					cps: 2,
					price: 150
				},
				{
					id: 2,
					label: 'Ad 3',
					isBought: false,
					cps: 3,
					price: 200
				},
				{
					id: 3,
					label: 'Ad 4',
					isBought: false,
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
					isBought: false,
					cps: 0.2,
					price: 100
				},
				{
					id: 1,
					label: 'Green',
					isBought: false,
					cps: 0.2,
					price: 100
				},
				{
					id: 2,
					label: 'Blue',
					isBought: false,
					cps: 0.2,
					price: 100
				},
				{
					id: 3,
					label: 'Yellow',
					isBought: false,
					cps: 0.2,
					price: 100
				}
			]
		}
	]
};

export default defaultGameData;
