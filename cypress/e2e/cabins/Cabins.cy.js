describe("Cabins section", async () => {
	it("checks that cabins are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("h1", "Dashboard");
		cy.contains("span", "Cabins").click();
		cy.contains("h1", "All cabins");
		cy.get(".row").should("have.length", 8);
	});

	it("should toggle create-cabin-form using Cancel button", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("[data-test-id='create-cabin-form']").should("not.exist");
		cy.contains("button", "Add new cabin").click();
		cy.get("[data-test-id='create-cabin-form']").should("be.visible");
		cy.contains("button", "Cancel").click();
		cy.get("[data-test-id='create-cabin-form']").should("not.exist");
	});

	it("should toggle create-cabin-form using X button", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("[data-test-id='create-cabin-form']").should("not.exist");
		cy.contains("button", "Add new cabin").click();
		cy.get("[data-test-id='create-cabin-form']").should("be.visible");
		cy.get("[data-test-id='modal-x-close']").click();
		cy.get("[data-test-id='create-cabin-form']").should("not.exist");
	});

	it("should add new cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.contains("button", "Add new cabin").click();
		cy.get("#name").click().type("New e2e cabin");
		cy.get("#maxCapacity").click().type(10);
		cy.get("#regularPrice").click().type(500);
		cy.get("#discount").click().clear().type(50);
		cy.get("#description").click().type("This is a luxury cabin created by cypress e2e test.");
		cy.get("#image").selectFile("src/data/cabins/cabin-008.jpg");
		cy.contains("button", "Create new cabin")
			.click()
			.then(async () => {
				cy.get(".row", {timeout: 10000}).should("have.length", 9);
			});
	});

	it("should edit cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("[data-test-id='toggle-button-New e2e cabin']").click();
		cy.get("button").contains("span", "Edit").click({force: true});
		cy.get("#name").click().clear().type("Edited cabin");
		cy.get("#maxCapacity").click().clear().type(15);
		cy.get("#regularPrice").click().clear().type(1000);
		cy.get("#discount").click().clear().type(100);
		cy.get("#description").click().clear().type("This is a luxury edited.");
		cy.contains("button", "Edit cabin")
			.click()
			.then(async () => {
				cy.get("[data-test-id='toggle-button-Edited cabin']", {timeout: 5000}).should("exist");
				cy.get(".row").should("have.length", 9);
			});
	});

	it("should reset edited cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("[data-test-id='toggle-button-Edited cabin']").click();
		cy.get("button").contains("span", "Edit").click({force: true});
		cy.get("#name").click().clear().type("New e2e cabin");
		cy.get("#maxCapacity").click().clear().type(10);
		cy.get("#regularPrice").click().clear().type(500);
		cy.get("#discount").click().clear().type(50);
		cy.get("#description")
			.click()
			.clear()
			.type("This is a luxury cabin created by cypress e2e test.");
		cy.contains("button", "Edit cabin")
			.click()
			.then(async () => {
				cy.get("[data-test-id='toggle-button-New e2e cabin']", {timeout: 5000}).should("exist");
			});
	});

	it("should duplicate a cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get("[data-test-id='toggle-button-New e2e cabin']", {timeout: 5000}).click();
		cy.get("button")
			.contains("span", "Duplicate")
			.click({force: true})
			.then(async () => {
				cy.get("[data-test-id='toggle-button-Copy of New e2e cabin']", {timeout: 5000}).should(
					"exist",
				);
				cy.get(".row").should("have.length", 10);
			});
	});

	it("should delete cabins", () => {
		cy.deleteACabin("New e2e cabin", 9);
		cy.deleteACabin("Copy of New e2e cabin", 8);
	});
});
