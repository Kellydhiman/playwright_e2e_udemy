import { test, expect } from "@playwright/test";

test("should have title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");

  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("should do something", { tag: "@smoke" }, async ({ page }, testinfo) => {
  //steps...
  await page.locator("//h1").click();
});

test.only("should demo locators", async ({ page }) => {
  // 1. Launch URL & assert title and header
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  //2. Click on Make Appointment

  let makeAppmtBtn = page.getByRole("link", { name: "Make Appointment" });
  console.log(
    `>> The type of locator: ${typeof makeAppmtBtn}, The value of locator: ${JSON.stringify(makeAppmtBtn)}`,
  );

  // await makeAppmtBtn.click();
  // await expect(page.getByText("Please login to make")).toBeVisible();
});
