import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../interfaces';
import { supabase } from '../../../utils/supabaseClient';
import { IGameData } from '../../../interfaces/index';
import { identity } from 'cypress/types/lodash';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return await getAllUpgradesResolver(res);
	}

	if (req.method === 'POST') {
		return await createUpgradesResolver(req, res);
	}
	return res.status(405).json({ message: 'HTTP method not allowed' });
};

const getAllUpgradesResolver = async (res: NextApiResponse) => {
	const { data, error } = await supabase.from<IGameData[]>('upgrades').select('*');
	if (data) return res.status(200).json(data);
	res.status(500).json({ message: error.message });
};

const createUpgradesResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const { userId, items,  } = req.body;
	const { data, error } = await supabase.from<IGameData>('upgrades').insert([
		{
            items,
            userId
		}
	]);
	if (data) return res.status(201).json(data);
	return res.status(500).json({ message: error.message });
};
export default handler;
