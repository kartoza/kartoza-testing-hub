import { test, expect } from '@playwright/test';

let url = '/';

test.use({
  viewport: {
    height: 650,
    width: 1300
  }
});

test('data->map->layers', async ({ page }) => {

  await page.goto(url);

  await expect(page.locator('#wrap')).toContainText('Benin Electrification Platform SDI');

  await page.locator('#lang-select').selectOption('en');

  await expect(page.getByRole('button', { name: 'Data ' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin OSM OSM Sourced themes' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Benin OSM Landuse/ Land cover' })).toBeVisible();

  await page.getByRole('button', { name: 'Data ' }).click();

  await page.getByRole('link', { name: 'Map Layers' }).click();

  await expect(page.getByRole('link', { name: 'Upload Layers' })).toBeVisible();

  await expect(page.locator('h2')).toContainText('Explore Layers');

  await expect(page.locator('#wrap')).toContainText('37 Layers found');

  await expect(page.locator('.col-lg-4 > a').first()).toBeVisible();

  await expect(page.getByRole('link', { name: 'gis_osm_railways_free_10' })).toBeVisible();

  await page.getByRole('link', { name: 'gis_osm_railways_free_10' }).click();

  await expect(page.locator('h2')).toContainText('gis_osm_railways_free_10');

  await expect(page.locator('canvas')).toBeVisible();

  await page.locator('canvas').click({
    position: {
      x: 390,
      y: 177
    }
  });

  await expect(page.locator('div').filter({ hasText: /^gis_osm_railways_free_10$/ }).nth(1)).toBeVisible();

  await expect(page.locator('#identify-container')).toContainText('Lat: 8.103 - Long: 2.505');

  await expect(page.locator('#identify-container').getByText('code')).toBeVisible();

  await expect(page.getByText('6101')).toBeVisible();

  await expect(page.locator('#identify-container').getByText('fclass')).toBeVisible();

  await expect(page.getByText('rail', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: '' }).click();

  await page.getByRole('button', { name: '' }).click();

  await page.getByRole('button', { name: '' }).click();

  await page.getByRole('button', { name: '' }).click();

  await expect(page.getByRole('button', { name: 'Download Layer' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Metadata Detail' })).toBeVisible();

  await expect(page.locator('#info').getByText('gis_osm_railways_free_10')).toBeVisible();

  await expect(page.getByText('Oct. 22, 2020, 9:51 a.m.')).toBeVisible();

  await expect(page.locator('dd').filter({ hasText: 'Global' })).toBeVisible();

  await expect(page.locator('#info').getByRole('link', { name: 'super' })).toBeVisible();
  
  await expect(page.getByRole('link', { name: ' Layer WMS GetCapabilities' })).toBeVisible();
});