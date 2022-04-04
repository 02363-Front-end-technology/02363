import { atom } from 'recoil';
import { ETab } from '@Interfaces/enums';

export const upgradeFilterState = atom({
	key: 'UpgradeFilter',
	default: ETab.Frontend
});
