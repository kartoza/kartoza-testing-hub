import { test, expect } from '@playwright/test';

let url = '/';

test('exploration mali', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('h2')).toContainText('Welcome to the IRENA West Africa Electrification Platform');

  await expect(page.getByRole('link', { name: 'Start exploring' })).toBeVisible();

  await page.getByRole('link', { name: 'Start exploring' }).click();

  await expect(page.getByRole('link', { name: 'Mali' })).toBeVisible();

  await page.getByRole('link', { name: 'Mali' }).click();

  await expect(page.getByRole('main')).toContainText('ExploreMali');

  await expect(page.getByLabel('Map', { exact: true })).toBeVisible();

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 260,
      y: 575
    }
  });

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 260,
      y: 574
    }
  });

  await expect(page.getByText('Existing grid (2471)')).toBeVisible();

  await expect(page.getByText('Stand-alone PV (126276)')).toBeVisible();

  await expect(page.getByText('Mini-grid PV Hybrid (15446)')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Population with electricity access');

  await expect(page.getByRole('figure', { name: 'Population with electricity' }).locator('rect')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Investment required');
  
  await expect(page.getByRole('figure', { name: 'Investment required' }).getByRole('img')).toBeVisible();
});