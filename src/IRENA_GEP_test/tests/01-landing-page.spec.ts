import { test, expect } from '@playwright/test';

let url = '/';

test('landing page', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('h2')).toContainText('Welcome to the IRENA West Africa Electrification Platform');

  await expect(page.locator('section')).toContainText('Explore least cost electrification strategies around the world, interacting with country contextual data and different investment scenarios.');

  await expect(page.getByRole('link', { name: 'Start exploring' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Learn more' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Irena Logo' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'IEP IRENA West Africa' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Explore' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' About' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Documentation' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'en' })).toBeVisible();
  
});