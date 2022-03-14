<<<<<<< HEAD
import { IGameData } from '@Interfaces/index';
import { supabase } from '@Utils/supabaseClient';
import React, { useEffect, useState } from 'react';
import { PostgrestError, useFilter, useRealtime, useSelect, useSubscription } from 'react-supabase';
=======
import { GameData } from '@Interfaces/index';
import React from 'react';
import { useFilter, useRealtime } from 'react-supabase';
>>>>>>> ebdd4b514a1171d25782332f83c0311a6d48a39f

type Props = {
	userId: string;
};

<<<<<<< HEAD


=======
>>>>>>> ebdd4b514a1171d25782332f83c0311a6d48a39f
/**
 *
 * @param userID
 * @returns
 */
<<<<<<< HEAD
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
=======
const useGameData = ({ userId }: Props) => {
	const filter = useFilter<GameData>((query) => query.eq('userId', userId), [userId]);
	const [result] = useRealtime<GameData>(
		'upgrades',
		{
			select: {
				filter: filter
			}
		},
		(data, payload) => data.userId === payload.userId
	);
	const { data, fetching, error } = result;
	return [data, fetching, error];
};

export default useGameData;
>>>>>>> ebdd4b514a1171d25782332f83c0311a6d48a39f
