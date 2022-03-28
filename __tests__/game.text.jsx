import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Game page', () => {
	it('should render the game page', async () => {
		const { render } = await getPage({
			route: '/',
			dotenvFile: '.env.local',
		});
		render();

	//	const ahref = screen.getByRole('button', { name: 'New Game' });
		// expect(ahref).toBeInTheDocument();
	});

});
