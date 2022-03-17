import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../interfaces';
import { supabase } from '../../../utils/supabaseClient';

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
	const { data, error } = await supabase.from<IUser[]>('users').select('*');
	if (data) return res.status(200).json(data);
	res.status(500).json({ message: error.message });
};

const createUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name } = req.body;
	const { data, error } = await supabase.from<IUser>('users').insert([
		{
			name: name
		}
	]).single();
	if (data) return res.status(201).json(data);
	return res.status(500).json({ message: error.message });
};
export default handler;
