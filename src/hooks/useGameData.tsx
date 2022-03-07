import { GameData } from '@Interfaces/index';
import React from 'react';
import { useFilter, useRealtime, useSelect, useSubscription } from 'react-supabase';

type Props = {
	userId: string;
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

export default useGameData;
