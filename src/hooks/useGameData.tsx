import { supabase } from '@Utils/supabaseClient';
import React, { useEffect, useState } from 'react';
import { useFilter, useRealtime, useSelect, useSubscription } from 'react-supabase';

type Props = {
	userId: string;
};

type GameData = {
	id: number;
	userId: string;
	items: Array<CategoryData>;
};

type CategoryData = {
	label: string;
	upgrades: Array<UpgradeItem>;
};

type UpgradeItem = {
	label: string;
	isBought: boolean;
	multiplier: number;
	price: number;
};

/**
 * 
 * @param userID 
 * @returns 
 */
const useGameData = ({ userId }: Props) => {
	const filter = useFilter<GameData>((query) => query.eq('userId', userId), [userId]);
	const [result] = useRealtime<GameData>('upgrades',
    { 
        select: {
          filter: filter
        }
      },
      (data, payload) => data.userId === payload.userId,
   )
    const { data, fetching, error } = result
	return [data, fetching, error ];
};

export { useGameData, type GameData, type CategoryData, type UpgradeItem };
