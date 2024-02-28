import { test, expect } from '@playwright/test';

let url = '/';

test('landing page', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('#wrap')).toContainText('Benin Electrification Platform SDI');

  await expect(page.locator('h2')).toContainText('WELCOME TO THE');

  await expect(page.locator('#home-navbar').getByRole('link')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Données ' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Map Viewers' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'BEP' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'logo', exact: true })).toBeVisible();

  await expect(page.getByRole('link', { name: 'S\'inscrire' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Connexion' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Search' })).toBeEmpty();

  await expect(page.locator('#moon')).toBeVisible();

  await expect(page.locator('#clouds path').first()).toBeVisible();

  await expect(page.locator('#trbn1 rect').nth(1)).toBeVisible();

  await expect(page.locator('#bldg4 > rect')).toBeVisible();

  await expect(page.locator('#bldg4 polygon').nth(1)).toBeVisible();

  await expect(page.locator('#bldg2 > rect')).toBeVisible();

  await expect(page.locator('#bldg2 polygon').nth(1)).toBeVisible();

  await expect(page.locator('#bldg2 polygon').nth(2)).toBeVisible();

  await expect(page.locator('#bldg1 > rect')).toBeVisible();

  await expect(page.locator('#bldg1 path').nth(2)).toBeVisible();

  await expect(page.locator('#tree-2 polygon').first()).toBeVisible();

  await expect(page.locator('#factory polygon').nth(1)).toBeVisible();

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