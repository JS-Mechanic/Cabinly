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
		cy.contains("button", "Create new cabin").click();
		cy.wait(5000);
	});

	it("should edit cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get(".row").contains("div", "New e2e cabin").siblings().children().children().click();
		cy.get("button").contains("span", "Edit").click({force: true});
		cy.get("#name").click().clear().type("Edited cabin");
		cy.get("#maxCapacity").click().clear().type(15);
		cy.get("#regularPrice").click().clear().type(1000);
		cy.get("#discount").click().clear().type(100);
		cy.get("#description").click().clear().type("This is a luxury edited.");
		cy.contains("button", "Edit cabin").click();
		cy.wait(5000);
	});
	it("should check edited cabin", () => {
		cy.visit("/cabins");
		// cy.contains("span", "Cabins").click();

		cy.get(".row")
			.contains("div", "Edited cabin")
			.siblings(".maxCapacity")
			.should("have.text", "Fits up to 15 guests");

		cy.get(".row")
			.contains("div", "Edited cabin")
			.siblings(".price")
			.should("have.text", "$1,000.00");

		cy.get(".row")
			.contains("div", "Edited cabin")
			.siblings(".discount")
			.should("have.text", "$100.00");
	});
	it("should reset edited cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.wait(3000)
			.get(".row")
			.contains("div", "Edited cabin")
			.siblings()
			.children()
			.children()
			.click();
		cy.get("button").contains("span", "Edit").click({force: true});
		cy.get("#name").click().clear().type("New e2e cabin");
		cy.get("#maxCapacity").click().clear().type(10);
		cy.get("#regularPrice").click().clear().type(500);
		cy.get("#discount").click().clear().type(50);
		cy.get("#description")
			.click()
			.clear()
			.type("This is a luxury cabin created by cypress e2e test.");
		cy.contains("button", "Edit cabin").click();
		cy.wait(5000);
	});

	it("should delete added cabin", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get(".row").contains("div", "New e2e cabin").siblings().children().children().click();
		cy.get("button").contains("span", "Delete").click({force: true});
		cy.get("#root").siblings().children().contains("button", "Delete").click();
		cy.wait(5000);
	});
	it("checks that cabin is successfully deleted", () => {
		cy.visit("/");
		cy.contains("span", "Cabins").click();
		cy.get(".row").should("have.length", 8);
		cy.wait(5000);
	});
});
