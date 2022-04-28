/** contributors
 * Loui
 */
import { supabase } from '@Utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

async function getItems(uuid: string) {
	const { data, error } = await supabase.from('upgrades').select('items').match({ userId: uuid }).single();
	if (data) {
		return data.items;
	} else return error;
}

type QueryType = {
	uuid: string;
	category: string;
	itemId: string;
};

/**
 *  @api {post} /api/buy/:uid/:category/:itemlabel Buy an item
 * @param req  NextApiRequest
 * @param res NextApiResponse<string>
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { uuid, category, itemId } = req.query as QueryType;
	try {
		const categories = await getItems(uuid);

		//TODO quick fix for balance
		const { data, error } = await supabase.from('upgrades').select('balance').match({ userId: uuid }).single();

		if (error) throw error;
		const balance = data.balance;

		const upgrades = categories.find((i) => i.label === category).upgrades;
		const upgrade = upgrades.find((i) => i.id === Number(itemId));
		if (upgrade == undefined) return res.status(503).send({message: 'Item not found'});

		//TODO User har ikke balance
		if (balance < upgrade.price) return res.send({ message: 'Not enough balance', balance });

		const newBalance = balance - upgrade.price;
		await supabase.from('upgrades').update({ balance: newBalance }).match({ userId: uuid });
		if (upgrade.isBought === false) {
			upgrade.isBought = true;
		} else {
			upgrade.level++;
			upgrade.price = upgrade.price * 2;
			upgrade.multiplier = upgrade.multiplier * 1.025;
		}

		const result = await supabase.from('upgrades').update({ items: categories }).match({ userId: uuid }).single();

		res.status(200).json({
			message: 'You bought the item: ' + upgrade.label + ' for ' + upgrade.price + ' $',
			data: result.data
		});
	} catch (error) {
		res.status(500).send(error);
	}
}
