const { test, expect } = require('@playwright/test');

test('Herokuapp Form Authentication Test', async ({ page }) => {
  test.setTimeout(20000);

  await page.goto('https://the-internet.herokuapp.com/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*secure/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/.*login/);
});