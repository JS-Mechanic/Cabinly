describe("Cabins section", async () => {
	it("checks that cabins are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("h1", "Dashboard");
		cy.contains("span", "Cabins").click();
		cy.contains("h1", "All cabins");
		cy.get(".table-row").should("have.length", 5);
	});

	it("should toggle create-cabin-form using Cancel button", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("#create-cabin-form").should("not.exist");
		cy.contains("button", "Add new cabin").click();
		cy.get("#create-cabin-form").should("be.visible");
		cy.contains("button", "Cancel").click();
		cy.get("#create-cabin-form").should("not.exist");
	});

	it("should toggle create-cabin-form using X button", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("#create-cabin-form").should("not.exist");
		cy.contains("button", "Add new cabin").click();
		cy.get("#create-cabin-form").should("be.visible");
		cy.get("#modal-x-close").click();
		cy.get("#create-cabin-form").should("not.exist");
	});
});
