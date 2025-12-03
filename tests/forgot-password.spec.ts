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
    // - prazan email
    await forgot.submitEmail('');
    await forgot.assertEmailEmptyError();
  });

  test('Submit invalid email format shows error', async ({ page }) => {
  const forgot = new ForgotPasswordPage(page);

  await forgot.goto();
  // email u nevalidnom formatu
  await forgot.submitEmail('invalid-email-format');
  await forgot.assertInvalidEmailFormatError();
});

  test('Submit valid email', async({page}) => {
  const forgot = new ForgotPasswordPage(page);

  await forgot.submitEmail('advokat.tiac@mailinator.com');    
})


  // Ovde  dodati više scenarija, npr.:
  // - valid email
  // - invalid email format
  // - backend error simulacija
});
