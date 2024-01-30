// @ts-check
const {test, expect} = require("@playwright/test");

test("checks that settings are successfully fetched", async ({page}) => {
	await page.goto("/");
	await page.getByText("Login").click();
	await page.getByText("Settings").click();
	await expect(page.getByRole("heading", {name: "Update hotel settings"})).toBeVisible();
	await expect(page.locator("input")).toHaveCount(4);
});

test("Checks blur feature to update settings", async ({page}) => {
	await page.goto("/");
	await page.getByText("Login").click();
	await page.getByText("Settings").click();
	await page.locator("#min-nights").fill("5");
	await expect(page.locator("#min-nights")).toHaveValue("5");
});
