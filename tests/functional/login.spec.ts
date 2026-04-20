import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to Login Page", async ({ page }) => {
    //Launch URL & assert title and header
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");

    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    //Click on Make Appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("Should Login Successfully", async ({ page }) => {
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    // Successful  Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Assertions
    await expect(page.locator("//h2")).toHaveText("Make Appointment");
  });

  test("Should prevent Login with Invalid Credentials", async ({ page }) => {
    // Unsuccessful Login
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Assertions
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
