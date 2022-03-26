import { selector } from 'recoil';
import { upgradeFilterState } from '../atoms';
import defaultGameDate from '@Utils/defaultGameData';
import { ETab } from '@Interfaces/enums';

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
