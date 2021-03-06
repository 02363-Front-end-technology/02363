/** contributors
 * Loui
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { IGameData, IUser } from '@Interfaces/index';
import { supabase } from '@Utils/supabaseClient';
import defaultGameData from '@Utils/defaultGameData';
import dayjs from 'dayjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return await getAllUsersResolver(res);
	}

	if (req.method === 'POST') {
		return await createUserResolver(req, res);
	}
	return res.status(405).json({ message: 'HTTP method not allowed' });
};

const getAllUsersResolver = async (res: NextApiResponse) => {
	const { data, error } = await supabase.from<IUser[]>('users').select(`
	name,
	last_login`);
	if (data) return res.status(200).json(data);
	res.status(500).json({ message: error.message });
};

const createUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name } = req.body;

	try {
		const upgradeRes = await supabase
			.from<IGameData>('upgrades')
			.insert({
				items: defaultGameData.items,
				balance: 100
			})
			.single();

		const userRes = await supabase
			.from<IUser>('users')
			.insert([
				{
					name: name,
					last_login: dayjs().toDate(),
					upgrades_id: upgradeRes.data.id
				}
			])
			.single();

		await supabase.from<IGameData>('upgrades').update({ userId: userRes.data.id }).match({ id: upgradeRes.data.id });
		return res.status(201).json(userRes.data);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
export default handler;
