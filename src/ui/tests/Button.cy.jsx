import Button from "../Button.jsx";

describe("Button component", () => {
	it("should mounts a small primary Button component ", () => {
		cy.mount(
			<Button size="small" variation="primary">
				Button
			</Button>,
		);

		cy.get("button")
			.should("have.text", "Button")
			.should("have.css", "font-size", "19.2px")
			.should("have.css", "padding", "6.4px 12.8px")
			.should("have.css", "text-transform", "uppercase")
			.should("have.css", "font-weight", "600")
			.should("have.css", "text-align", "center");
	});

	it("should mounts a medium secondary Button component ", () => {
		cy.mount(
			<Button size="medium" variation="secondary">
				Button
			</Button>,
		);

		cy.get("button")
			.should("have.text", "Button")
			.should("have.css", "font-size", "22.4px")
			.should("have.css", "padding", "19.2px 25.6px")
			.should("have.css", "font-weight", "500");
	});

	it("should mounts a large danger Button component ", () => {
		cy.mount(
			<Button size="large" variation="danger">
				Button
			</Button>,
		);

		cy.get("button")
			.should("have.text", "Button")
			.should("have.css", "font-size", "25.6px")
			.should("have.css", "padding", "19.2px 38.4px")
			.should("have.css", "font-weight", "500");
	});
});
