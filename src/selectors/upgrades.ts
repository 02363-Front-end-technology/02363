import { selector } from 'recoil';
import { currentUserIdState, upgradeFilterState } from '../atoms';
import defaultGameDate from '@Utils/defaultGameData';
import { ETab } from '@Interfaces/enums';
import { supabase } from '@Utils/supabaseClient';

export const currentUserGameDataQuery = selector<string | null>({
	key: 'currentUserGameDataQuery',
	get: async ({ get }) => {
		const { data, error } = await supabase
			.from('upgrades')
			.select('*')
			.match({ userId: get(currentUserIdState) })
			.single();
		if (error) {
			console.error(error);
			return error;
		}
		return data;
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
