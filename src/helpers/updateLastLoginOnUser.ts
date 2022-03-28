import { supabase } from '@Utils/supabaseClient';
import dayjs from 'dayjs';

export const updateLastLoginOnUser = async (userId: string) => {
	const now = dayjs();
	const lastLogin = now.format('YYYY-MM-DD HH:mm:ss');
	const { data } = await supabase.from('users').update({ lastLogin }).match({ id: userId });
	return data;
};
