import { test } from '@playwright/test';
import { SignInPage } from '../../pages/AuthPages/SignInPage';
import users from '../../config/users.json'; // import JSON

test.describe('Sign-In by roles', () => {

  test('Admin can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.admin.Email, users.admin.Password);
    await page.waitForURL('**/admin-profile/cases', { timeout: 5000 });
    await signIn.assertRedirectAfterLogout();
  });

  test('Attorney can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.attorney.Email, users.attorney.Password);
    await page.waitForURL('**/attorney-profile/cases', { timeout: 5000 });
    await signIn.assertRedirectAfterLogout();
  });

  test('Applicant can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.applicant.Email, users.applicant.Password);
    await page.waitForURL('**/applicant-profile/cases', { timeout: 5000 });
    await signIn.assertRedirectAfterLogout();
  });

});