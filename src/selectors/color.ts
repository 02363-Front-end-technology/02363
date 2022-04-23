import { selector } from 'recoil';
import { webshopColorState } from '../atoms/color';


export const currentWebshopColorState = selector<string>({
	key: 'currentWebshopColor',
	get: ({ get }) => {
		return get(webshopColorState);
	},
	set: ({ set }, newValue) => {
		set(webshopColorState, newValue);
	}
});
