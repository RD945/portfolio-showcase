import { mkdir } from "node:fs/promises";
import { test, expect } from "@playwright/test";

const widths = [320, 360, 390, 768, 1024, 1440, 1920];

test("responsive composition and mobile navigation", async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("#hero img")).toHaveCount(0);
  const menu = page.locator('button[aria-controls="mobile-navigation"]');
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Mobile primary navigation" })
    .getByRole("link", { name: "Work" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#work$/);
});

test("navbar becomes a floating translucent shell on scroll", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const header = page.locator("header");
  const shell = header.locator(":scope > div");
  await expect(header).toHaveAttribute("data-scrolled", "false");
  await expect(shell).not.toHaveClass(/backdrop-blur-xl/);

  await page.evaluate(() => window.scrollTo(0, 600));
  await expect
    .poll(() => header.getAttribute("data-scrolled"))
    .toBe("true");
  await expect(shell).toHaveClass(/backdrop-blur-xl/);
  await expect(shell).toHaveClass(/rounded-2xl/);

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect
    .poll(() => header.getAttribute("data-scrolled"))
    .toBe("false");
});

test("services accordion and project CTA", async ({ page }) => {
  await page.goto("/");

  const service = page.getByRole("button", { name: "Website Strategy" });
  await expect(service).toHaveAttribute("aria-expanded", "false");
  await service.click();
  await expect(service).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#website-strategy-description")).toBeVisible();

  await expect(page.getByRole("link", { name: "Email Scribble" })).toBeVisible();
  await expect(page.getByRole("complementary", { name: "Contact prompt" })).toHaveCount(0);
});

test("mobile contact card stays compact and usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#contact");

  await expect(page.getByRole("heading", { name: "Have a website in mind?" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Email Scribble" })).toBeVisible();
  await expect(page.locator("#contact img")).toHaveCount(0);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  ).toBe(true);
});

test("keyboard baseline, local resources, and page errors", async ({ page }) => {
  const errors = [];
  const failedRequests = [];
  const badResponses = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("requestfailed", (request) => failedRequests.push(request.url()));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      badResponses.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);

  const media = page.locator("main img:not([aria-hidden='true']), main video");
  for (const item of await media.all()) {
    await item.scrollIntoViewIfNeeded();
    await expect
      .poll(
        () =>
          item.evaluate((element) =>
            element.tagName === "VIDEO"
              ? element.readyState >= 2
              : element.complete && element.naturalWidth > 0,
          ),
        { timeout: 20000 },
      )
      .toBe(true);
  }

  const projectResources = await page.evaluate(() =>
    performance
      .getEntriesByType("resource")
      .filter((resource) => resource.name.includes("/assets/site/work/"))
      .map((resource) => ({ name: resource.name, transferSize: resource.transferSize })),
  );
  expect(projectResources).toHaveLength(4);
  expect(projectResources.every((resource) => resource.name.endsWith(".webm"))).toBe(true);
  expect(projectResources.reduce((total, resource) => total + resource.transferSize, 0)).toBeLessThan(
    600 * 1024,
  );

  expect(errors).toEqual([]);
  expect(failedRequests).toEqual([]);
  expect(badResponses).toEqual([]);
  expect(
    await page.evaluate(() =>
      performance
        .getEntriesByType("resource")
        .filter((resource) => !resource.name.startsWith(location.origin)),
    ),
  ).toEqual([]);
});

test("reduced motion, touch targets, and screenshots", async ({ browser, page }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const mobilePage = await context.newPage();
  await mobilePage.goto("/");
  const menuBox = await mobilePage.getByRole("button", { name: "Open menu" }).boundingBox();
  expect(menuBox.width).toBeGreaterThanOrEqual(44);
  expect(menuBox.height).toBeGreaterThanOrEqual(44);
  expect(
    await mobilePage.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
  ).toBe("auto");
  await context.close();

  await mkdir("test-results", { recursive: true });
  await page.setViewportSize({ width: 1440, height: 1050 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    for (let position = 0; position < document.body.scrollHeight; position += innerHeight) {
      window.scrollTo(0, position);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(100);
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });

});

test("phone landscape does not overflow", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto("/");
  await page.setViewportSize({ width: 844, height: 390 });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  ).toBe(true);
  await context.close();
});
