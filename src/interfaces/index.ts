export type IUser = {
	id: string;
	name: string;
	createdAt: Date;
	last_login?: Date;
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
	isBought?: boolean;
	level?: number;
	multiplier: number;
	price: number;
};
