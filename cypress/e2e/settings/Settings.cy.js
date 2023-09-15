describe("Settings section", async () => {
	it("checks that settings are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("h1", "Dashboard");
		cy.contains("span", "Settings").click();
		cy.contains("h1", "Update hotel settings");
		cy.get("input").should("have.length", 4);
	});

	it("checks blur feature to update settings", () => {
		cy.visit("/");
		cy.contains("span", "Settings").click();
		cy.get("#min-nights").clear().type(2).blur();
		cy.wait(500);
		cy.get("#max-nights").clear().type(50).blur();
		cy.wait(500);
		cy.get("#max-guests").clear().type(5).blur();
		cy.wait(500);
		cy.get("#breakfast-price").clear().type(20).blur();

		cy.wait(3000);
		cy.get("#min-nights").should("have.value", 2);
		cy.get("#max-nights").should("have.value", 50);
		cy.get("#max-guests").should("have.value", 5);
		cy.get("#breakfast-price").should("have.value", 20);
	});

	it("should reset settings", () => {
		cy.visit("/");
		cy.contains("span", "Settings").click();
		cy.get("#min-nights").clear().type(3).blur();
		cy.wait(500);
		cy.get("#max-nights").clear().type(90).blur();
		cy.wait(500);
		cy.get("#max-guests").clear().type(10).blur();
		cy.wait(500);
		cy.get("#breakfast-price").clear().type(15).blur();

		cy.wait(3000);
		cy.get("#min-nights").should("have.value", 3);
		cy.get("#max-nights").should("have.value", 90);
		cy.get("#max-guests").should("have.value", 10);
		cy.get("#breakfast-price").should("have.value", 15);
	});
});
