// @ts-check
const {test, expect} = require("@playwright/test");

test("checks that settings are successfully fetched", async ({page}) => {
	await page.goto("/");
	await page.getByText("Login").click();
	// await expect(page).toHaveURL(/.*dashboard/);
	await page.getByText("Settings").click();
	await expect(page.getByRole("heading", {name: "Update hotel settings"})).toBeVisible();
	await expect(page.locator("input")).toHaveCount(4);
});
