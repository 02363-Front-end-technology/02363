import { atom } from 'recoil';


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

export const currentUserGameData = atom({
	key: 'CurrentUserGameData',
	default: null,
	effects: [localStorageEffect('CurrentUserGameData')],
})
export const currentUserGameDataId = atom<string>({
	key: 'CurrentUserGameDataId',
	default: null
});
