/** contributors
 * Loui
 */
import { atom } from 'recoil';
import { ETab, EWebshopUpgrades } from '@Interfaces/enums';

export const upgradeFilterState = atom({
	key: 'UpgradeFilter',
	default: ETab.Frontend
});

export const upgradeFilterWebshopState = atom ({
	key: 'UpgradeFilterWebshop',
	default: EWebshopUpgrades.Color,
});
