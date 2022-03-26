import { atom } from 'recoil';


export const currentUserIdState = atom<string>({
	key: 'CurrentUserId',
	default: null,
});


