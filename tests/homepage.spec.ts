import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and shows PulseNews branding", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=PulseNews").first()).toBeVisible();
  });

  test("displays featured articles section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Featured Stories")).toBeVisible();
  });

  test("displays trending section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Trending Now")).toBeVisible();
  });

  test("category filter works", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Technology");
    await expect(page.locator("article")).toHaveCount(2);
  });

  test("can navigate to article page", async ({ page }) => {
    await page.goto("/");
    await page.locator("article").first().locator("a").first().click();
    await expect(page.locator("text=Back")).toBeVisible();
  });

  test("newsletter signup form works", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[type="email"]', "test@example.com");
    await page.click('button:text("Subscribe")');
    await expect(page.locator("text=You're subscribed!")).toBeVisible();
  });
});
