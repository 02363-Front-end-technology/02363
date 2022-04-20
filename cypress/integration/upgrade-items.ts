/// <reference types="cypress" />

const userId = '03790a26-a8e8-40da-b53d-02665c31c2dd';

describe('Upgrade items', () => {
	beforeEach(() => {
		cy.visit(`game/?uuid=${userId}`);
		cy.get('[data-cy="settings"]').click();
		cy.get('[data-cy="reset-game"]').click();
	});

	it('should upgrade Ads -> Adblocker', () => {
		cy.get('[data-cy="Ads"]').click();
		cy.get('[data-cy="Adblocker"]').click({ force: true });
		cy.intercept('POST',`api/buy?uuid=${userId}`, {fixture: 'gamedata.json'}).as('buy');
	});
});
