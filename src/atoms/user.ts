import { atom } from 'recoil';
import { IGameData } from '@Interfaces/index';
import defaultGameDate from '@Utils/defaultGameData';

// https://recoiljs.org/docs/guides/atom-effects/#local-storage-persistence
const localStorageEffect = key => ({setSelf, onSet}) => {
	const savedValue = localStorage.getItem(key)
	if (savedValue != null) {
		setSelf(JSON.parse(savedValue));
	}
	onSet((newValue, _, isReset) => {
		isReset
			? localStorage.removeItem(key)
			: localStorage.setItem(key, JSON.stringify(newValue));
	});
};

export const currentUserIdState = atom<string>({
	key: 'CurrentUserId',
	default: null,
	effects: [localStorageEffect('CurrentUserId')],
});

export const currentUserGameData = atom<Partial<IGameData> | null>({
	key: 'CurrentUserGameData',
	default: defaultGameDate,
	effects: [localStorageEffect('CurrentUserGameData')]
});

