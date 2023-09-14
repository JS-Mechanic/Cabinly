import ButtonText from "../ButtonText.jsx";

describe("ButtonText component", () => {
	it("should mounts ButtonText component on chrome", {browser: "chrome"}, () => {
		cy.mount(<ButtonText>Test</ButtonText>);
		cy.get("button").should("have.css", "font-weight", "500");
		cy.get("button").should("have.css", "text-align", "center");
		cy.get("button").should("have.css", "transition", "all 0.3s ease 0s");
		cy.get("button").should(
			"have.css",
			"background",
			"rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
		);
		cy.get("button").should("have.css", "border", "0px none rgb(0, 0, 0)");
	});

	it("should mounts ButtonText component on electron", {browser: "electron"}, () => {
		cy.mount(<ButtonText>Test</ButtonText>);
		cy.get("button").should("have.css", "font-weight", "500");
		cy.get("button").should("have.css", "text-align", "center");
		cy.get("button").should("have.css", "transition", "all 0.3s ease 0s");
		cy.get("button").should(
			"have.css",
			"background",
			"rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
		);
		cy.get("button").should("have.css", "border", "0px none rgb(0, 0, 0)");
	});

	it("should mounts ButtonText component on firefox", {browser: "firefox"}, () => {
		cy.mount(<ButtonText>Test</ButtonText>);
		cy.get("button").should("have.css", "font-weight", "500");
		cy.get("button").should("have.css", "text-align", "center");
		cy.get("button").should("have.css", "transition", "all 0.3s ease 0s");
		cy.get("button").should("have.css", "background", "none");
		cy.get("button").should("have.css", "border", "0px rgb(0, 0, 0)");
	});
});
