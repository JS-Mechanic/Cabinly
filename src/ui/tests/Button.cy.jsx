import Button from "../Button.jsx";

describe("Button component", () => {
	it("mounts a small primary Button component ", () => {
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
});
