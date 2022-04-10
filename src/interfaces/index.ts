export type IUser = {
	id: string;
	name: string;
	createdAt: Date;
	last_login?: Date;
	balance?: number;
};

export type IGameData = {
	id: number;
	balance: number;
	userId: string;
	items: Array<ICategoryData>;
};

export type ICategoryData = {
	label: string;
	upgrades: Array<IUpgradeItem>;
};

export type IUpgradeItem = {
	id: number;
	label: string;
	multiplier?: number;
	price: number;
	isBought?: boolean;
	level?: number;
	cps?: number
};

export type IProduct = {
	image: string;
	description: string;
	price: number;
	rating: number;
};
