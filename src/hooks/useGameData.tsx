import { IGameData } from '@Interfaces/index';
import React from 'react';
import { PostgrestError, useFilter, useRealtime } from 'react-supabase';

type Props = {
	userId: string;
};

/**
 *
 * @param userID
 * @returns
 */
const useGameData = ({ userId }: Props): [IGameData[], boolean, PostgrestError] => {
	const filter = useFilter<IGameData>((query) => query.eq('userId', userId), [userId]);
	const [result] = useRealtime<IGameData>('upgrades', {
		select: { filter }
	});
	const { data, error, fetching } = result;
	return [data, fetching, error];
};

export { useGameData };
