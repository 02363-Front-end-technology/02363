import { selector } from 'recoil';
import { currentUserGameData, upgradeFilterState } from '../atoms';
import { ETab } from '@Interfaces/enums';
import { IUpgradeItem } from '@Interfaces/index';

export const currentUserBalanceQuery = selector<number | null>({
	key: 'currentUserGameDataQuery',
	get: ({ get }) => {
		const gameData = get(currentUserGameData);
		if (!gameData) return null;
		const { balance } = gameData;
		return balance;
	},
	set: ({ get, set }, newValue: number = 0) => {
		const multiplier = 1.0;
		set(currentUserGameData, { ...get(currentUserGameData), balance: newValue * multiplier });
	}
});

export const filteredUpgradesState = selector<IUpgradeItem[]>({
	key: 'FilteredUpgrades',
	get: ({ get }) => {
		const gamedata = get(currentUserGameData);
		const filter = get(upgradeFilterState);
		switch (filter) {
			case ETab.Frontend:
				return gamedata.items.find((item) => item.label === ETab.Frontend).upgrades;
			case ETab.Server:
				return gamedata.items.find((item) => item.label === ETab.Server).upgrades;
			case ETab.Ads:
				return gamedata.items.find((item) => item.label === ETab.Ads).upgrades;
			default:
				return [];
		}
	}
});
