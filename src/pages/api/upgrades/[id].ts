/** contributors
 * Loui
 * Tobias Maneschijn
 * 
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@Utils/supabaseClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return await getSingleUpgradeResolver(req, res);
	}
	if (req.method === 'PATCH') {
		return await updateUpgradeResolver(req, res);
	}
	if (req.method === 'DELETE') {
		return await deleteUpgradeResolver(req, res);
	}
	return res.status(405).json({ message: 'HTTP method not allowed' });
};

const getSingleUpgradeResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id.toString();
	const { data, error } = await supabase.from('upgrades').select('*').match({ id: id }).single();
	if (data) return res.status(200).json(data);
	return res.status(404).json({ message: error.message, code: error.code });
};

const updateUpgradeResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id.toString();
	const { gameData } = req.body;
	const { data, error } = await supabase
		.from('upgrades')
		.update(gameData)
		.match({ id: id });

	if (data) return res.status(200).json(data);
	return res.status(404).json({ message: error.message });
};

const deleteUpgradeResolver = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id.toString();
	const { data, error } = await supabase.from('upgrades').delete().match({ id: id });
	if (data) return res.status(200).json(data);
	return res.status(500).json({ message: error.message });
};
export default handler;
