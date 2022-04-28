/// <reference types="cypress" />
/** contributors
 * Loui
 */
import allItemsUpgradedGameData from '../../src/utils/allItemsUpgradedGameData';

const userId = '3396f761-994d-460f-8911-ed398a20a900';
const upgradeId = 69;

describe('Upgrade items', () => {
	beforeEach(() => {
		cy.visit(`game/?uuid=${userId}`);
		cy.request('PATCH', `/api/upgrades/${upgradeId}`, {
			gameData: {
				balance: 10000,
				items: allItemsUpgradedGameData.items
			}
		});
	});

	it('Change from upgrade layout to webshop layout', () => {
		cy.get('[data-cy="change-layout"]').click();
		cy.get('[data-cy="search-button"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
		cy.get('[data-cy="cart-button"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
		cy.get('[data-cy="sign-in-button"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
	});

	it('Ads should be present on the website layout', () => {
		cy.get('[data-cy="change-layout"]').click();
		cy.get('[data-cy="ad-/ad_2.jpg"] > .relative > .pb-8').should('contain.text', 'GET YOUR CLOTHES AT OSAS');
		cy.get('[data-cy="ad-/ad_5.jpg"] > .relative > .pb-8').should('contain.text', 'Tip Top Vacay A/S');
		cy.get('[data-cy="ad-/ad_3.jpg"] > .relative > .pb-8').should('contain.text', 'Frankie\'s Steak House');
		cy.get('[data-cy="ad-/ad_4.jpg"] > .relative > .pb-8').should('contain.text', 'School supplies for your kids!');
	});

	it('Should change the layout back to the upgrade layout', () => {
		cy.get('[data-cy="change-layout"]').click();
		cy.get('[data-cy="change-layout"]').click();
	});

	it('should change color of the website layout', () => {
		cy.get('#tabs-3--tabpanel-0 > .space-y-6 > :nth-child(3) > .flex-col > [data-cy="Blue-select"]').click();
		cy.get('[data-cy="change-layout"]').click();
		cy.get('[data-cy="search-button"]').should('have.css', 'background-color', 'rgb(0, 0, 255)');
		cy.get('[data-cy="cart-button"]').should('have.css', 'background-color', 'rgb(0, 0, 255)');
		cy.get('[data-cy="sign-in-button"]').should('have.css', 'background-color', 'rgb(0, 0, 255)');
	});
});
