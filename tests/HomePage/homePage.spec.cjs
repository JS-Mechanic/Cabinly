// @ts-check
const {test, expect} = require("@playwright/test");

test("Redirect from / to /dashboard", async ({page}) => {
	await page.goto("/");
	await page.getByText("Login").click();
	await expect(page).toHaveURL(/.*dashboard/);
	await expect(page.getByRole("heading", {name: "Dashboard"})).toBeVisible();
});
