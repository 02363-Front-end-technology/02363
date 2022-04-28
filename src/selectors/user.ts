/** contributors
 * Loui
 */
import { selector } from 'recoil';
import { currentUserGameData } from '../atoms';
import { IGameData } from '@Interfaces/index';
import { ETab } from '@Interfaces/enums';

const getTotalMultiplier = (gameData: Partial<IGameData>): number => {
	const frontendMultiplier = gameData.items
		.find((i) => i.label === ETab.Frontend)
		.upgrades.filter((i) => i.isBought === true)
		.reduce((acc, curr) => {
			return acc + curr.multiplier;
		}, 0);

	const serverMultiplier = gameData.items
		.find((i) => i.label === ETab.Server)
		.upgrades.filter((i) => i.level >= 1)
		.reduce((acc, curr) => {
			return acc + curr.multiplier;
		}, 0);

	return frontendMultiplier + serverMultiplier;
};

export const currentUserMultiplier = selector<number>({
	key: 'CurrentUserMultiplier',
	get: ({ get }) => {
		const gameData = get(currentUserGameData);
		return getTotalMultiplier(gameData);
	}
});

export const currentUserCPS = selector<number>({
	key: 'CurrentUserCPS',
	get: ({ get }) => {
		if(!get(currentUserGameData)) return 0;
		const gameData = get(currentUserGameData);
		return gameData.items.find((i) => i.label === ETab.Ads)
			.upgrades.filter((u) => u.isBought === true)
			.reduce((acc, curr) => {
				return acc + curr.cps;
			}, 0);
	}
});
