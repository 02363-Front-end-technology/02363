export type IUser = {
	id: string;
	name: string;
	createdAt: Date;
	last_login: Date | null;
};

export type IUpgrade = {
	id: string;
	user_id: string;
	upgrades: {
		item1: number;
	};
};

export type GameData = {
	id: number;
	userId: string;
	items: Array<CategoryData>;
};

export type CategoryData = {
	label: string;
	upgrades: Array<UpgradeItem>;
};

export type UpgradeItem = {
	label: string;
	isBought: boolean;
	multiplier: number;
	price: number;
};
