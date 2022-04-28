/// <reference types="cypress" />
/** contributors
 * Loui
 */

describe('Create and load game', () => {

	it('should create new game', () => {
		cy.visit('/');
		cy.contains('New Game');
		cy.contains('Load Game');
		cy.get('[data-cy=new-game]').click();

		cy.url()
			.should('include', '/new-game');

		cy.get('[data-cy=submit]')
			.should('be.disabled');

		cy.get('#name')
			.type('CYPRESS TEST DELETE ME!', { delay: 200 });

		cy.intercept(
			{
				method: 'POST',
				url: '/api/users'
			}
		).as('createUser');

		cy.get('[data-cy=submit]').click();
		cy.url()
			.should('include', '/game');
	});

	it('should load game', () => {
		cy.visit('/');
		cy.contains('New Game');
		cy.contains('Load Game');
		cy.get('[data-cy=load-game]').click();

		cy.url()
			.should('include', '/load-game');

		cy.get('select')
			.select(0);

		cy.get('[data-cy=submit]').click();

		cy.url()
			.should('include', '/game');
	});

	it('Should reset game', () => {
		// Update balance and reset game
		const userId = '03790a26-a8e8-40da-b53d-02665c31c2dd';
		cy.request('PATCH', '/api/upgrades/33', { gameData: { balance: 10000 } });
		cy.visit(`game/?uuid=${userId}`);
		cy.get('[data-cy="currentBalance"]').should('contain', '10000');
		cy.get('[data-cy="settings"]').click();
		cy.get('[data-cy="reset-game"]').click();
		cy.get('[data-cy="currentBalance"]').should('contain', '100');
	});
});
