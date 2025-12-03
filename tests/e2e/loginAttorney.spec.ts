import { test } from '@playwright/test';
import { SignInPage } from '../../pages/SignInPage';
import users from '../../config/users.json'; // import JSON



test('Admin can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    await signIn.goto();
    await signIn.login(users.attorney.Email, users.attorney.Password);
    await signIn.assertRedirectAfterLogin();
    



  });


