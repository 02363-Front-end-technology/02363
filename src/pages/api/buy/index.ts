import { ICategoryData, IGameData } from '@Interfaces/index';
import { supabase } from '@Utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser, IUpgradeItem } from '../../../interfaces/index';


async function getItems(parameters) {
    const { data, error } = await supabase.from<ICategoryData[]>('upgrades').select('items').match(parameters).single()
    if (data) return data
    throw (error)
}

async function getUser(uid: string) {
    const { data, error } = await supabase.from<IUser>('users').select('*').match({ uid }).single()
    if (data) return data
    throw (error)

}

type QueryType = {
    uid: string;
    category: string;
    itemlabel: string;
}

/**
 *  @api {post} /api/buy/:uid/:category/:itemlabel Buy an item
 * @param req  NextApiRequest
 * @param res NextApiResponse<string>
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    const { uid, category, itemlabel } = req.query as QueryType
    try {
        const categories = await getItems({ category })
        const upgrades = categories.find(i => i.label === category).upgrades;
        const upgrade = upgrades.find(i => i.label === itemlabel)
        if (upgrade == undefined) throw new Error('Item not found')
        const user = await getUser(uid);

        if (user.balance < upgrade.price) throw new Error('Not enough money')
        const newBalance = user.balance - upgrade.price
        await supabase.from<IUser>('users').update({ balance: newBalance }).match({ uid })
        upgrade.isBought = true

        const result = await supabase.from('upgrades').update({items: categories}).match({ uid }).single()

        res.status(200).json("You bought the item: " + upgrade.label + " for " + upgrade.price + " $")


    } catch (error) {
        res.status(500).send(error)
    }

}