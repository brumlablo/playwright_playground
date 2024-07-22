import { test, expect } from '@playwright/test';

test('forum - register - fails with error', async ({ page }) => {
  await page.goto('https://veeam.com/');

  await page.getByRole('navigation').getByRole('link', { name: 'Support' }).click()

  await page.getByRole('navigation').getByRole('link', { name: 'R&D Forums' }).click()

  await page.waitForURL('https://forums.veeam.com/?ad=menu-support');

  // remove cookies
  await page.locator('#cookiescript_injected').getByLabel('Close').click()
  await expect(page.locator('#cookiescript_injected')).toBeHidden()

  await page.getByRole('menuitem', { name: 'Register' }).click()

  await page.waitForURL(/https:\/\/forums\.veeam\.com\/ucp\.php\?mode=register&sid=*/);

  // accept terms
  await page.waitForLoadState();
  const acceptButton = page.getByRole('button', { name: 'I agree to these terms' })
  await expect(acceptButton).toBeVisible()
  await expect(acceptButton).toBeEnabled()
  await page.waitForTimeout(1000)
  await acceptButton.click()

  // register page
  const usernameInput = page.getByLabel('Username:')
  await usernameInput.waitFor({ state: 'visible'})
  expect(page.url()).toBe('https://forums.veeam.com/ucp.php?mode=register')

  const tmp  = 'InterviewUser';
  await usernameInput.fill(tmp)
  await page.getByLabel('Password:', { exact: true }).fill(tmp)
  await page.getByLabel('Confirm password:').fill(tmp)
  await page.getByLabel('Email address:', { exact: true }).fill(`${tmp.toLowerCase()}@gmail.com`)
  await page.getByRole('button', { name: 'Submit' }).click()

  expect(page.url()).toBe('https://forums.veeam.com/ucp.php?mode=register')

  const errorMsg = page.locator('.error')
  await errorMsg.waitFor({ state: 'visible'})
  await expect(errorMsg).toBeVisible()
  await expect(errorMsg.getByText('Public email are not allowed. Please, be aware that your domain or email address was banned. To find out the reason please contact support ')).toBeVisible()
});


