/// <reference types="cypress" />
/** contributors
 * Loui
 */
import defaultGameData from '../../src/utils/defaultGameData';

const userId = '03790a26-a8e8-40da-b53d-02665c31c2dd';
const upgradeId = 33;

describe('Upgrade items', () => {
	beforeEach(() => {
		cy.visit(`game/?uuid=${userId}`);
		cy.request('PATCH', `/api/upgrades/${upgradeId}`, { gameData: { balance: 10000, items: defaultGameData.items } });
	});

	it('should upgrade Frontend -> Navigation bar', () => {
		cy.get('[data-cy="Frontend"]').click();
		cy.get('[data-cy="NavigationBar"]').click({ force: true });
		cy.get('[data-cy="NavigationBar"]').should('be.disabled');
		cy.get('[data-cy="currentMultiplier"]').should('contain', '0.025');
	});

	it('should upgrade Ads -> Adblocker', () => {
		cy.intercept({ url: '/api/buy*', query: { uuid: userId } }).as('buy');
		cy.get('[data-cy="Ads"]').click();
		cy.get('[data-cy="Adblocker"]').click({ force: true });
		cy.get('[data-cy="Adblocker"]').should('be.disabled');
		cy.get('[data-cy="currentCPS"]').should('contain', '1.5');
	});

	it('should upgrade Server -> RAM', () => {
		cy.get('[data-cy="Server"]').click();
		cy.get('[data-cy="RAM"]').click({ force: true });
		cy.get('[data-cy="RAM-level"]').should('contain', '1');
		cy.get('[data-cy="currentMultiplier"]').should('contain', '0.026');
		cy.get('[data-cy="currentBalance"]').should('contain', '9850');
	});
});
