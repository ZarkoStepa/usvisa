import { test, expect } from '@playwright/test';
import { SignInPage } from '../../pages/AuthPages/SignInPage';
import { SideMenuAdminPage } from '../../pages/AuthPages/SideMenuAdmin';

test.describe('Sign-In Tests', () => {

  test('Valid login and logout', async ({ page }) => {
    const signIn = new SignInPage(page);
    const sideMenu = new SideMenuAdminPage(page);

    // open sign-in page
    await signIn.goto();
    await signIn.assertLogoIsVisible();

    // login
    await signIn.login('advokat.tiac@mailinator.com', 'Password##99');

    // dashboard redirect
    await expect(page).toHaveURL(/attorney-profile\/cases/);

    // logout
    await sideMenu.clickLogout();

    // must be redirected back to /sign-in
    await signIn.assertRedirectAfterLogout();
  });

  test('Invalid login shows Wrong email or password', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('wrong@mail.com', 'Wrong123');

    await signIn.assertWrongEmailOrPassword();
  });

  test('Empty email should show required error', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('', '');

    await signIn.assertEmailCantBeEmpty();
  });

  test('Invalid email format error', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.login('wrong-format-email', 'Password##99');

    await signIn.assertInvalidEmailFormat();
  });

  test('Logo visibility on Sign-In page', async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.assertLogoIsVisible();
  });

});
