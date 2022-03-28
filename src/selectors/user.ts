import { atom, selector } from 'recoil';
import { supabase } from '@Utils/supabaseClient';
import { currentUserGameData, currentUserIdState } from '../atoms';
import { IGameData } from '@Interfaces/index';
import { ETab } from '@Interfaces/enums';

const getTotalMultiplier = (gameData: IGameData): number => {
	const frontendMultiplier = gameData.items.find((i) => i.label === ETab.Frontend).upgrades.reduce((acc, curr) => {
		return acc + curr.multiplier;
	}, 0);

	const adsMultiplier = gameData.items.find((i) => i.label === ETab.Ads).upgrades.reduce((acc, curr) => {
		return acc + curr.multiplier;
	}, 0);

	return frontendMultiplier + adsMultiplier;
}
export const currentNameQuery = selector<string | null>({
	key: 'currentName',
	get: async ({ get }) => {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.match({ id: get(currentUserIdState) })
			.single();
		if (error) {
			console.error(error);
			return error;
		}
		return data.name;
	}
});

export const currentUserMultiplier = selector<number>({
	key: 'CurrentUserMultiplier',
	get: ({get}) => {
		const gameData = get(currentUserGameData)
		return getTotalMultiplier(gameData);
	}
});


