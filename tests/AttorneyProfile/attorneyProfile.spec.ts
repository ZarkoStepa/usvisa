import { test, expect } from "@playwright/test" 
import { SignInPage } from '../../pages/AuthPages/SignInPage';
import { SideMenuAttorneyPage } from "../../pages/SideMenuAttorney";


test.describe('Sign-In Tests', () => {
    test('Valid login and logout', async ({ page }) => {
        const signIn = new SignInPage(page);
        const sideMenu = new SideMenuAttorneyPage(page);
    
        // open sign-in page
        await signIn.goto();
        await signIn.assertLogoIsVisible();
    
        // login
        await signIn.login('advokat.tiac@mailinator.com', 'Password##99');
    
        // dashboard redirect
        await expect(page).toHaveURL(/attorney-profile\/cases/);

        //Attorney Profile 
        await sideMenu.clickProfileImageAttorney();
    
        // logout
       // await sideMenu.clickLogout();
    
        // must be redirected back to /sign-in
        //await signIn.assertRedirectAfterLogout();
      });


})