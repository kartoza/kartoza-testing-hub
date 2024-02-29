import { test, expect } from '@playwright/test';

let url = '/';

test('test', async ({ page }) => {
  await page.goto(url);

  await expect(page.locator('#emcCarousel')).toContainText('Electronic Metadata Catalogue (EMC)');

  await expect(page.getByRole('img', { name: 'EMC' })).toBeVisible();

  await expect(page.locator('.navbar-brand')).toBeVisible();

  await expect(page.getByRole('link', { name: ' Search Metadata' })).toBeVisible();

  await page.getByRole('link', { name: ' Search Metadata' }).click();

  await page.waitForURL('**/dataset/');

  await expect(page.locator('h1')).toContainText('Electronic Metadata Catalogue (EMC)');

  //await expect.soft(page.getByRole('heading', { name: 'Total number of metadata record:' })).toBeVisible();

  await expect(page.getByPlaceholder('Search metadata records..')).toBeEmpty();

  await expect(page.getByRole('heading', { name: 'Filter by location Clear' })).toBeVisible();

  await expect(page.locator('#dataset-map-container')).toBeVisible();

  //await page.getByRole('link', { name: '+' }).click();

  await page.getByRole('link', { name: '+' }).click();

  await page.getByRole('link', { name: '-' }).first().click();

  await page.locator('#dataset-map-container').click();

  await page.getByRole('link', { name: '-' }).first().click();

  await expect(page.getByRole('tab', { name: ' Temporal range ' })).toBeVisible();

  await expect(page.getByTestId('temporal_search-start')).toBeEmpty();

  await expect(page.getByTestId('temporal_search-end')).toBeEmpty();

  await page.getByRole('heading', { name: ' Organisations ' }).click();

  await page.getByRole('heading', { name: ' Organisations ' }).click();

  await page.getByRole('heading', { name: ' SASDI Themes ' }).click();

  await page.getByRole('heading', { name: ' SASDI Themes ' }).click();

  await page.getByRole('button', { name: ' ISO Topic Categories ' }).click();

  await page.getByRole('button', { name: ' ISO Topic Categories ' }).click();

  await page.getByRole('button', { name: ' DCPR Request ' }).click();

  await page.getByRole('button', { name: ' DCPR Request ' }).click();

  await page.getByRole('button', { name: ' Featured Metadata records ' }).click();

  await page.getByRole('button', { name: ' Featured Metadata records ' }).click();

  await page.locator('.navbar-brand').click();

  await page.getByRole('link', { name: ' Organisations' }).click();

  await page.waitForURL('**/organization/');

  await expect(page.getByRole('complementary')).toContainText('What are Organisations?');

  await expect(page.getByRole('complementary')).toContainText('CKAN Organisations are used to create, manage and publish collections of datasets. Users can have different roles within an Organisation, depending on their level of authorisation to create, edit and publish.');

  await expect(page.getByRole('link', { name: 'View Agricultural Research' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View Chief Directorate:' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View City of Johannesburg' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View Council for Scientific' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View CSI' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View Department of Water and' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View EMC Staging Organization' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View NSIF' }).first()).toBeVisible();

  await expect(page.getByRole('link', { name: 'View SASDI EMC staff' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View South African Environmental Observation Network' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View South African National' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View South African Weather' })).toBeVisible();

  await page.getByRole('link', { name: ' Publish Metadata' }).click();

  await page.waitForURL('**/publish/');

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('h1')).toContainText('Publish Metadata');

  await expect(page.getByRole('link', { name: 'Manual publication A' })).toBeHidden();

  await expect(page.getByText('XML upload A registered and')).toBeVisible();

  await expect(page.getByRole('link', { name: 'Harvesting A registered and' }).first()).toBeHidden();

  await page.getByRole('link', { name: ' Register a Project' }).click();

  await page.waitForURL('**/dcpr/');

  await expect(page.locator('h1')).toContainText('Data Capture Project Registry (DCPR)');

  await expect(page.getByRole('link', { name: 'FORM E1 It is compulsory for' })).toBeHidden();

  await expect(page.getByRole('link', { name: 'FORM E2 Base Dataset' }).first()).toBeHidden();

  await expect(page.getByRole('link', { name: 'FORM D Users or distributors' })).toBeHidden();

  await expect(page.getByRole('link', { name: 'List DCPR requests Lists of' }).first()).toBeHidden();

  await page.getByRole('button', { name: ' Resources' }).click();

  await page.getByRole('link', { name: 'About EMC-DCPR' }).click();

  await page.waitForURL('**/pages/about');

  await expect(page.locator('section')).toContainText('Welcome to the SASDI Electronic Metadata Catalogue');

  await page.getByRole('button', { name: ' Resources' }).click();

  await page.getByRole('link', { name: 'Help Overview' }).click();

  await page.waitForURL('**/pages/help');

  await expect(page.locator('h1')).toContainText('Help Overview');

  await page.getByRole('button', { name: ' Resources' }).click();

  await page.getByRole('link', { name: 'FAQ' }).click();

  await page.waitForURL('**/pages/frequently-asked-questions');

  await expect(page.getByRole('heading')).toContainText('FAQ');

  await page.getByRole('button', { name: ' Contact' }).click();

  await page.waitForURL('**/contacts');

  await expect(page.getByRole('heading')).toContainText('Contacts');

});
