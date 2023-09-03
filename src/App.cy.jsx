import React from "react";
import App from "./App";

describe("<App />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<App />);
		cy.get("h1").contains("eq", "The page you are looking for could not found");
	});
});
