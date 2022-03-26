import { selector } from 'recoil';
import { supabase } from '@Utils/supabaseClient';
import { currentUserIdState } from '../atoms';

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
