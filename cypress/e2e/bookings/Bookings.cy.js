describe("Bookings section", async () => {
	it("checks that bookings are successfully fetched", () => {
		cy.visit("/");
		cy.url().should("include", "/dashboard");
		cy.contains("span", "Bookings")
			.click()
			.then(async () => {
				cy.url().should("contain", "/bookings");
				cy.contains("h1", "All bookings");
				cy.get(".row", {timeout: 10000}).should("have.lengthOf.lte", 10);
			});
	});

	it("should test next button functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Next")
			.click()
			.then(async () => {
				cy.url().should("contain", "/bookings?page=2");
				cy.get(".row", {timeout: 10000}).should("have.lengthOf.lte", 10);
			});
	});

	it("should test previous button functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Next").click();
		cy.contains("button", "Previous")
			.click()
			.then(async () => {
				cy.url().should("contain", "/bookings?page=1");
				cy.get(".row", {timeout: 10000}).should("have.lengthOf.lte", 10);
			});
	});

	it("checks that previous button is disabled on the first page", () => {
		cy.visit("/bookings?page=1");
		cy.contains("button", "Previous").should("be.disabled");
	});

	it("checks that next button is not disabled on the first page", () => {
		cy.visit("/bookings?page=1");
		cy.contains("button", "Next").should("not.be.disabled");
	});

	it("checks that on page 1, filter is set to `All` and also is disabled", () => {
		cy.visit("/bookings");
		cy.contains("button", "All").should("be.disabled");
	});

	it("should test 'checked out' filter functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Checked out")
			.click()
			.then(async () => {
				cy.get(".row")?.should("include.text", "checked out");
				cy.get(".row")?.should("not.include.text", "checked in");
				cy.get(".row")?.should("not.include.text", "unconfirmed");
				cy.contains("button", "Checked out").should("be.disabled");
				cy.url().should("contain", "/bookings?status=checked-out");
			});
	});

	it("should test 'checked in' filter functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Checked in")
			.click()
			.then(async () => {
				cy.get(".row")?.should("include.text", "checked in");
				cy.get(".row")?.should("not.include.text", "checked out");
				cy.get(".row")?.should("not.include.text", "unconfirmed");
				cy.contains("button", "Checked in").should("be.disabled");
				cy.url().should("contain", "/bookings?status=checked-in");
			});
	});

	it("should test 'unconfirmed' filter functionality", () => {
		cy.visit("/bookings");
		cy.contains("button", "Unconfirmed")
			.click()
			.then(async () => {
				cy.get(".row")?.should("include.text", "unconfirmed");
				cy.get(".row")?.should("not.include.text", "checked in");
				cy.get(".row")?.should("not.include.text", "checked out");
				cy.contains("button", "Unconfirmed").should("be.disabled");
				cy.url().should("contain", "/bookings?status=unconfirmed");
			});
	});
});
