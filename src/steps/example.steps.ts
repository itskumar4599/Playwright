import { Given, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Given('I open the Playwright homepage', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://playwright.dev');
});

Then('the title should contain {string}', async (expectedTitle: string) => {
  const title = await page.title();
  if (!title.includes(expectedTitle)) {
    throw new Error(`Expected title to include ${expectedTitle}, but got ${title}`);
  }
  await browser.close();
});
