import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import '@testing-library/jest-dom'
import dayjs from 'dayjs';

const users = [
	{
		id: '1',
		name: 'test',
		createdAt: dayjs().toDate(),
		last_login: dayjs().toDate(),
		balance: 100
	}
]

describe('New game page', () => {
	it('should render the new game page', async () => {
		const { render } = await getPage({
			route: '/',
			dotenvFile: '.env.local'
		});
		render();
		const ahref = screen.getByRole('button', { name: 'New Game' });
		expect(ahref).toBeInTheDocument();
	});
});

describe('Load game page', () => {
	it('should render the load game page', async () => {
		const { render } = await getPage({
			route: '/load-game',
			dotenvFile: '.env.local'
		});
		render();
		const button = screen.getByRole('button', { name: 'Load' });
		expect(button).toBeInTheDocument();
	});
});

