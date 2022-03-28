import { selector } from 'recoil';
import { currentUserGameData, currentUserIdState, upgradeFilterState } from '../atoms';
import defaultGameDate from '@Utils/defaultGameData';
import { ETab } from '@Interfaces/enums';

export const currentUserBalanceQuery = selector<number | null>({
	key: 'currentUserGameDataQuery',
	get: ({ get }) => {
		const gameData = get(currentUserGameData);
		if (!gameData) return null;
		const { balance } = gameData;
		return balance;
	},
	set: ({ get }) => {
		const gameData = get(currentUserGameData);
		const multiplier = 1.0;
		if (!gameData) return null;
		const { balance } = gameData;
		if (!multiplier) return balance;
		return balance * multiplier;
	}
});

export const filteredUpgradesState = selector({
	key: 'FilteredUpgrades',
	get: ({ get }) => {
		const gamedata = get(currentUserGameData);
		const filter = get(upgradeFilterState);

		switch (filter) {
			case 'Frontend':
				return gamedata.items.find((item) => item.label === ETab.Frontend).upgrades;
			case 'Backend':
				return gamedata.items.find((item) => item.label === ETab.Server).upgrades;
			case 'Ads':
				return gamedata.items.find((item) => item.label === ETab.Ads).upgrades;
			default:
				return gamedata;
		}
	}
});
