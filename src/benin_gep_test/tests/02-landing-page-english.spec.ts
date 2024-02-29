import { test, expect } from '@playwright/test';

let url = '/';

test.use({
  viewport: {
    height: 650,
    width: 1300
  }
});

test('landing-page-english', async ({ page }) => {

  await page.goto(url);

  await expect(page.locator('#wrap')).toContainText('Benin Electrification Platform SDI');

  await expect(page.locator('center')).toBeVisible();

  await page.locator('#lang-select').selectOption('en');

  await page.waitForLoadState('load');

  await expect(page.getByRole('button', { name: 'Data ' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Map Viewers' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'BEP' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin OSM OSM Sourced themes' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin OSM Landuse/ Land cover' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Urban and Social Environments' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin Transport and' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin Hydrological Sites SNV' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Solar PV SNV sites' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'The distribution lines in' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Distribution of education' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Distribution of healthcare' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin_South Southern part of' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin South Southern part of' })).toBeVisible();
  
});