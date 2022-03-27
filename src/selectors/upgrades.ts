import { selector } from 'recoil';
import { currentUserGameData, currentUserIdState, upgradeFilterState } from '../atoms';
import defaultGameDate from '@Utils/defaultGameData';
import { ETab } from '@Interfaces/enums';
import { supabase } from '@Utils/supabaseClient';

export const currentUserBalanceQuery = selector<string | null>({
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
		const list = defaultGameDate;
		const filter = get(upgradeFilterState);

		switch (filter) {
			case 'Frontend':
				return list.find((item) => item.label === ETab.Frontend).upgrades;
			case 'Backend':
				return list.find((item) => item.label === ETab.Backend).upgrades;
			case 'Ads':
				return list.find((item) => item.label === ETab.Ads).upgrades;
			default:
				return list;
		}
	}
});
