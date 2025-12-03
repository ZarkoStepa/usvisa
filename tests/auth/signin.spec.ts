import { test } from '@playwright/test';
import { SignInPage } from '../../pages/AuthPages/SignInPage';
import { SideMenuAdminPage } from '../../pages/AuthPages/SideMenuAdmin';

test.describe('Sign-In Tests', () => {

  test('Valid login', async ({ page }) => {
    const signIn = new SignInPage(page);
    const sideMenu = new SideMenuAdminPage(page);

    await signIn.goto();
    await signIn.login('advokat.tiac@mailinator.com', 'Password##99');
    await page.waitForURL(/attormney-profile\/cases/);
    await sideMenu.clickLogout();
    await signIn.assertRedirectAfterLogout();
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
