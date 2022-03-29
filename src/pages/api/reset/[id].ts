import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@Utils/supabaseClient';
import defaultGameDate from '@Utils/defaultGameData';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'PATCH') {
		return await resetGamedataSingleUser(req, res);
	}
	return res.status(405).json({ message: 'HTTP method not allowed' });
};

const resetGamedataSingleUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id.toString();
	const { data, error } = await supabase
		.from('upgrades')
		.update({items: defaultGameDate})
		.match({ userId: id })
		.single();
	if (data) {
		return res.status(200).json({ message: 'Successfully reset gamedata' });
	}
	return res.status(404).json({ message: error.message });
};

export default handler;
