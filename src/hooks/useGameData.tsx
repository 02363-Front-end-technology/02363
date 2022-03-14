import { IGameData } from '@Interfaces/index';
import { supabase } from '@Utils/supabaseClient';
import React, { useEffect, useState } from 'react';
import { PostgrestError, useFilter, useRealtime, useSelect, useSubscription } from 'react-supabase';

type Props = {
	userId: string;
};



/**
 * 
 * @param userID 
 * @returns 
 */
const useGameData = ({ userId }: Props) : [IGameData[], boolean, PostgrestError] => {
	const filter = useFilter<IGameData>((query) => query.eq('userId', userId), [userId]);
	const [result] = useRealtime<IGameData>('upgrades',
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

export { useGameData };
