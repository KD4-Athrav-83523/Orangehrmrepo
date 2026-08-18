const { test, expect } = require('@playwright/test');

test('OrangeHRM - Admin Add User Page Navigation', async ({ page }) => {
  test.setTimeout(90000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*dashboard/);

  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page).toHaveURL(/.*admin\/viewSystemUsers/);

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();
});