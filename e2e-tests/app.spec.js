const { test, expect } = require('@playwright/test')

test('front page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle("Pokemon")
})
