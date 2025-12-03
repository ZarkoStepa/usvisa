import { test } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test.describe('Sign-In Tests', () => {

  test('Valid login', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('advokat.tiac@mailinator.com', 'Password##99');
    await signIn.assertRedirectAfterLogin();
  });

  test('Invalid login', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('wrong@mail.com', 'Wrong123');
    await signIn.assertWrongEmailOrPassword();
  });
  test('Login with empty email shows error', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('', '');
    await signIn.assertEmailCantBeEmpty();
});

test('Login with invalid email format shows error', async ({ page }) => {
  const signIn = new SignInPage(page);

  await signIn.goto();
  await signIn.login('wrong-format-email', 'Password##99');
  await signIn.assertInvalidEmailFormat();
});
test('Logo is visible on Sign-In page', async ({ page }) => {
  const signIn = new SignInPage(page);

  await signIn.goto();
  await signIn.assertLogoIsVisible(); // provera logo elementa
});

});
