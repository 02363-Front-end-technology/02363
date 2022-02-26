export type IUser = {
	id: string;
	name: string;
	createdAt: Date;
};

export type IUpgrade = {
	id: string;
	user_id: string;
	upgrades: {
		item1: number;
		item2: number;
		item3: number;
		item4: [{ item51: number }, { item52: number }, { item53: number }, { item54: number }];
	};
};
