// pages/SideMenuAttorneyPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class SideMenuAttorneyPage {
  readonly page: Page;

  // LOGO + MENU TOGGLE
  readonly logo: Locator;
  readonly collapseArrow: Locator;
  readonly expandArrow: Locator;

  // USER PROFILE
  readonly userName: Locator;
  readonly userEmail: Locator;
  readonly userProfileImage: Locator;

  // MENU ITEMS
  readonly settingsIcon: Locator;
  readonly casesIcon: Locator;
  readonly casesLabel: Locator;
  readonly attorneyIcon: Locator;
  readonly attorneyLabel: Locator;


  // LOGOUT
  readonly logoutIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    // Top section
    this.logo = page.locator("img.logo");
    this.collapseArrow = page.locator("img.arrow[alt='Collapse']");
    this.expandArrow = page.locator("img.arrow[alt='Expand']");

    // User section
    this.userName = page.locator("div.name");
    this.userEmail = page.locator("div.email");
    this.userProfileImage = page.locator(".profile-img")

    // Menu entries
    this.settingsIcon = page.locator("img.icon[src*='settings-02']");
    this.casesIcon = page.locator("img.icon[src*='folder-file-storage']");
    this.casesLabel = page.locator("span.label", { hasText: 'My cases' });

    this.attorneyIcon = page.locator("img.icon[src*='notification-bubble']");
    this.attorneyLabel = page.locator("span.label", { hasText: 'Chat' });

    //logout
    this.logoutIcon = page.locator('img[alt="Logout"]');
  }

  //
  // ACTIONS
  //
  async clickCollapseMenu() {
    await this.collapseArrow.click();
  }

  async clickExpandMenu() {
    await this.expandArrow.click();
  }

  async clickCases() {
    await this.casesLabel.click();
  }

  async clickattorney() {
    await this.attorneyLabel.click();
  }

  async clickProfileImageAttorney() {
    await this.userProfileImage.click();
  }

  async clickLogout() {
    await this.logoutIcon.click();
    await expect(this.userProfileImage).toHaveAttribute('alt','Img');
  }

  //
  // ASSERTIONS
  //
  async assertUserInfo(name: string, email: string) {
    await expect(this.userName).toHaveText(name);
    await expect(this.userEmail.first()).toContainText(email);
  }

  async assertMenuVisible() {
    await expect(this.logo).toBeVisible();
    await expect(this.settingsIcon).toBeVisible();
    await expect(this.casesLabel).toBeVisible();
    await expect(this.attorneyLabel).toBeVisible();
  }

  async assertCollapsed() {
    await expect(this.expandArrow).toBeVisible();
  }

  async assertExpanded() {
    await expect(this.collapseArrow).toBeVisible();
  }

  async assertLogoutVisible() {
    await expect(this.logoutIcon).toBeVisible();
    await expect(this.logoutIcon).toHaveAttribute('alt', 'Logout');
  }
}
