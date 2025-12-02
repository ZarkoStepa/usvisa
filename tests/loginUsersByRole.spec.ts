import { test } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';
import users from '../config/users.json'; // import JSON

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

/*
type User = { Email: string; Password: string };

const roles: [string, User][] = [
  ['Admin', users.admin],
  ['Attorney', users.attorney],
  ['Applicant', users.applicant]
];

test.describe('Sign-In by roles', () => {
  for (const [role, user] of roles) {
    test(`${role} can login`, async ({ page }) => {
      const signIn = new SignInPage(page);
      await signIn.goto();
      await signIn.login(user.Email, user.Password);
      await signIn.assertRedirectAfterLogin();
    });
  }
});*/