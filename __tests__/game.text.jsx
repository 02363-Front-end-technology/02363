import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import '@testing-library/jest-dom'

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

