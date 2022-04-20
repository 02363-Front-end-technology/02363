/// <reference types="cypress" />

const userId = '03790a26-a8e8-40da-b53d-02665c31c2dd';

describe('Upgrade items', () => {
	beforeEach(() => {
		cy.visit(`game/?uuid=${userId}`);
	});

	it('should upgrade Ads -> Adblocker', () => {
		cy.get('[data-cy="Ads"]').click();
		cy.get('[data-cy="Adblocker"]').click();
		cy.get('[data-cy="Adblocker"]').should('be.disabled');
	});

});
