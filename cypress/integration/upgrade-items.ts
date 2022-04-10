/// <reference types="cypress" />

const userId = '';

describe('Upgrade items', () => {
	beforeEach(() => {
		cy.visit(`game/?userId=${userId}`);
	});

	it('should upgrade Ads', () => {
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
		cy.contains('New Game');
		cy.contains('Load Game');
		cy.get('[data-cy=load-game]').click();

		cy.url()
			.should('include', '/load-game');

		cy.get('select')
			.select('CYPRESS TEST DELETE ME!');

		cy.get('[data-cy=submit]').click();

		cy.url()
			.should('include', '/game');
	});
});
