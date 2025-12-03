import { test } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test.describe('Forgot Password Page Tests', () => {

  test('All elements are visible', async ({ page }) => {
    const forgot = new ForgotPasswordPage(page);
    await forgot.goto();
    await forgot.assertPageElementsVisible();
  });

  test('Submit empty email shows error', async ({ page }) => {
    const forgot = new ForgotPasswordPage(page);
    await forgot.goto();
    await page.screenshot({ path: 'screenshots/01-page-loaded.png' });
    await forgot.emailInput.fill('');
    await forgot.clickSendLink();
    await page.screenshot({ path: 'screenshots/02-after-submit.png' });
    await forgot.assertEmailEmptyError();
  });

  test('Submit invalid email format shows error', async ({ page }) => {
    const forgot = new ForgotPasswordPage(page);
    await forgot.goto();
    await forgot.emailInput.fill('invalid-email-format');
    await forgot.clickSendLink();
    await forgot.assertInvalidEmailFormatError();
  });

  test('Submit valid email', async ({ page }) => {
    const forgot = new ForgotPasswordPage(page);
    await forgot.goto();
    await page.screenshot({ path: 'screenshots/01-page-loaded.png' });
    await forgot.emailInput.fill('advokat.tiac@mailinator.com');
    await forgot.clickSendLink();
    await page.screenshot({ path: 'screenshots/02-after-submit.png' });
    
    // možeš dodati asertaciju da je notifikacija/poruka poslata
  });

});
