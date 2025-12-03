import { test } from '@playwright/test';
import { SignInPage } from '../../pages/SignInPage';
import users from '../../config/users.json'; // import JSON

test.describe('Sign-In by roles', () => {

  test('Admin can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.admin.Email, users.admin.Password);
    await signIn.assertRedirectAfterLogin();
  });

  test('Attorney can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.attorney.Email, users.attorney.Password);
    await signIn.assertRedirectAfterLogin();
  });

  test('Applicant can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.applicant.Email, users.applicant.Password);
    await signIn.assertRedirectAfterLogin();
  });

});