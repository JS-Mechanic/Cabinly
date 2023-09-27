// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("deleteACabin", (id, count) => {
	cy.visit("/");
	cy.contains("span", "Cabins").click();
	cy.get(`[data-test-id='toggle-button-${id}']`).click();
	cy.get("button").contains("span", "Delete").click({force: true});
	cy.get("[data-test-id='confirm-delete']")
		.click()
		.then(async () => {
			cy.get(`[data-test-id='toggle-button-${id}']`, {timeout: 5000}).should("not.exist");
			cy.get(".row").should("have.length", count);
		});
});
