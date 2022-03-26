import { selector } from 'recoil';
import { supabase } from '@Utils/supabaseClient';
import { currentUserIdState } from '../atoms';

export const currentNameQuery = selector({
	key: 'currentName',
	get: ({ get }) => get(currentUserIdState)
});
