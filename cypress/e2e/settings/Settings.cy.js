describe("Settings section", async () => {
	it("checks that settings are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("h1", "Dashboard");
		cy.contains("span", "Settings").click();
		cy.contains("h1", "Update hotel settings");
		cy.get("input").should("have.length", 4);
	});
});
