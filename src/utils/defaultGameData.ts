import { IGameData } from '@Interfaces/index';

const defaultGameData: Partial<IGameData> = {
	balance: 100,
	items: [
		{
			label: 'Frontend',
			upgrades: [
				{
					id: 0,
					label: 'Navigation Bar',
					isBought: false,
					multiplier: 0.25,
					price: 100
				},
				{
					id: 1,
					label: 'User Profile',
					isBought: false,
					multiplier: 0.5,
					price: 100
				},
				{
					id: 2,
					label: 'Sidebar',
					isBought: false,
					multiplier: 0.5,
					price: 100
				},
				{
					id: 3,
					label: 'Footer',
					isBought: false,
					multiplier: 0.5,
					price: 100
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
					multiplier: 0.25,
					price: 100
				},
				{
					id: 1,
					label: 'CPU',
					level: 0,
					multiplier: 0.5,
					price: 100
				},
				{
					id: 1,
					label: 'Network',
					level: 0,
					multiplier: 0.5,
					price: 100
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
					multiplier: 0.25,
					price: 100
				},
				{
					id: 1,
					label: 'Ad 2',
					isBought: false,
					multiplier: 0.5,
					price: 100
				}
			]
		}
	]
};

export default defaultGameData;
