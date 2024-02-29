import { test, expect } from '@playwright/test';

let url = '/';

test('test', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('#emcCarousel')).toContainText('Electronic Metadata Catalogue (EMC)');

  await expect(page.locator('.navbar-brand')).toBeVisible();

  await expect(page.getByRole('link', { name: ' Search Metadata' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Organisations' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Publish Metadata' })).toBeVisible();

  await expect(page.getByRole('link', { name: ' Register a Project' })).toBeVisible();

  await expect(page.getByRole('button', { name: ' Resources' })).toBeVisible();

  await expect(page.getByRole('button', { name: ' Contact' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Register', exact: true })).toBeVisible();

  await expect(page.getByRole('img', { name: 'EMC' })).toBeVisible();

  await expect(page.getByRole('main')).toContainText('Search for data');

  await expect(page.getByTestId('home_dataset_search_input')).toBeEmpty();

  await expect(page.locator('body')).toContainText('SASDI Themes');

  await expect(page.getByRole('link', { name: 'Hydrology' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Administrative boundaries' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Conservation' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Land Cover' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Land Use' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Imagery', exact: true })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Social Statistics' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Geodesy' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Cadastre' }).first()).toBeVisible();

  await expect(page.getByRole('link', { name: 'Transport' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Aerial Imagery' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Wetlands' })).toBeVisible();

  await expect(page.locator('body')).toContainText('Featured Metadata Records');

  await expect(page.locator('body')).toContainText('Recent Metadata Records');
});
