import { test } from '@playwright/test';
import { SignInPage } from '../../pages/AuthPages/SignInPage';
import { SideMenuAdminPage } from '../../pages/AuthPages/SideMenuAdmin';
import users from '../../config/users.json'; // import JSON



test('Admin can login', async ({ page }) => {
    const signIn = new SignInPage(page);
    const sideMenu = new SideMenuAdminPage(page);
    await signIn.goto();
    await signIn.login(users.attorney.Email, users.attorney.Password);
    await page.waitForURL('**/attorney-profile/cases', { timeout: 5000 });
     await sideMenu.clickLogout();
    await signIn.assertRedirectAfterLogout();




  });


