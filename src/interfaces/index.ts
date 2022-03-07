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
