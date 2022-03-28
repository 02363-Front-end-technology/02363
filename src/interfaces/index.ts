export type IUser = {
	id: string;
	name: string;
	createdAt: Date;
	last_login: Date | null;
	balance?: number;
};

export type IUpgrade = {
	id: string;
	user_id: string;
	upgrades: {
		item1: number;
	};
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
	label: string;
	isBought: boolean;
	multiplier: number;
	price: number;
};

export type IProduct = {
	image: string;
	description: string;
	price: number;
	rating: number;
};
