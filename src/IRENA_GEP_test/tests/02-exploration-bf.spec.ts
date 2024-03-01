import { test, expect } from '@playwright/test';

let url ='/';

test('exploration burkina faso', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('h2')).toContainText('Welcome to the IRENA West Africa Electrification Platform');

  await expect(page.getByRole('link', { name: 'Start exploring' })).toBeVisible();

  await page.getByRole('link', { name: 'Start exploring' }).click();

  await expect(page.getByRole('link', { name: 'Burkina Faso' })).toBeVisible();

  await page.getByRole('link', { name: 'Burkina Faso' }).click();

  await expect(page.getByRole('main')).toContainText('ExploreBurkina Faso');

  await expect(page.getByLabel('Map', { exact: true })).toBeVisible();

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 97,
      y: 464
    }
  });

  await expect(page.getByRole('main')).toContainText('Population with electricity access');

  await expect(page.getByRole('figure', { name: 'Population with electricity' }).locator('rect')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Investment required');

  await expect(page.getByRole('figure', { name: 'Investment required' }).getByRole('img')).toBeVisible();
  
});