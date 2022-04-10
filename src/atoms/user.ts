import { atom } from 'recoil';
import { IGameData } from '@Interfaces/index';
import defaultGameData from '@Utils/defaultGameData';

// https://recoiljs.org/docs/guides/atom-effects/#local-storage-persistence
const localStorageEffect =
	(key) =>
	({ setSelf, onSet }) => {
		const savedValue = sessionStorage.getItem(key);
		if (savedValue != null) {
			setSelf(JSON.parse(savedValue));
		}
		onSet((newValue, _, isReset) => {
			isReset ? sessionStorage.removeItem(key) : sessionStorage.setItem(key, JSON.stringify(newValue));
		});
	};

export const currentUserIdState = atom<string>({
	key: 'CurrentUserId',
	default: null,
	effects: [localStorageEffect('CurrentUserId')]
});

export const currentUserGameData = atom<Partial<IGameData> | null>({
	key: 'CurrentUserGameData',
	default: defaultGameData,
	effects: [localStorageEffect('CurrentUserGameData')]
});
