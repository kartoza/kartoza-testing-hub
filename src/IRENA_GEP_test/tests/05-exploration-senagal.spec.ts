import { test, expect } from '@playwright/test';

let url = '/';

test('exploration senagal', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('h2')).toContainText('Welcome to the IRENA West Africa Electrification Platform');

  await expect(page.getByRole('link', { name: 'Start exploring' })).toBeVisible();

  await page.getByRole('link', { name: 'Start exploring' }).click();

  await expect(page.getByRole('link', { name: 'Senegal' })).toBeVisible();

  await page.getByRole('link', { name: 'Senegal' }).click();

  await expect(page.getByRole('main')).toContainText('ExploreSenegal');

  await expect(page.getByLabel('Map', { exact: true })).toBeVisible();

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 139,
      y: 564
    }
  });

  await expect(page.getByRole('main')).toContainText('Population with electricity access');

  await expect(page.getByRole('figure', { name: 'Population with electricity' }).locator('rect')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Investment required');

  await expect(page.getByRole('figure', { name: 'Investment required' }).getByRole('img')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Value of storage');
  
  await expect(page.getByRole('figure', { name: 'Value of storage' }).getByRole('img')).toBeVisible();
});