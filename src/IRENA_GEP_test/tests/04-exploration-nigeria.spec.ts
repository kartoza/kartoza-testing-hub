import { test, expect } from '@playwright/test';

let url = '/';

test('exploration nigeria', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('h2')).toContainText('Welcome to the IRENA West Africa Electrification Platform');

  await expect(page.getByRole('link', { name: 'Start exploring' })).toBeVisible();

  await page.getByRole('link', { name: 'Start exploring' }).click();

  await expect(page.getByRole('link', { name: 'Nigeria' })).toBeVisible();

  await page.getByRole('link', { name: 'Nigeria' }).click();

  await expect(page.getByRole('main')).toContainText('ExploreNigeria');

  await expect(page.getByLabel('Map', { exact: true })).toBeVisible();

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 325,
      y: 223
    }
  });

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 312,
      y: 208
    }
  });

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 402,
      y: 219
    }
  });

  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 498,
      y: 214
    }
  });

  await expect(page.getByRole('main')).toContainText('Population with electricity access');

  await expect(page.getByRole('figure', { name: 'Population with electricity' }).locator('rect')).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Investment required');

  await expect(page.getByRole('figure', { name: 'Investment required' }).getByRole('img')).toBeVisible();
  
  await expect(page.getByRole('main')).toContainText('Added capacity');
});