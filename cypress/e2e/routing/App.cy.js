it("Should redirect from / to /dashboard", () => {
	cy.visit("/");
	cy.url().should("include", "/dashboard");
	cy.contains("h1", "Dashboard");
});
