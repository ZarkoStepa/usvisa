// pages/SideMenuAdminPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class SideMenuAdminPage {
  readonly page: Page;

  // LOGO + MENU TOGGLE
  readonly logo: Locator;
  readonly collapseArrow: Locator;
  readonly expandArrow: Locator;

  // USER PROFILE
  readonly userName: Locator;
  readonly userEmail: Locator;

  // MENU ITEMS
  readonly settingsIcon: Locator;
  readonly casesIcon: Locator;
  readonly casesLabel: Locator;
  readonly applicantsIcon: Locator;
  readonly applicantsLabel: Locator;

  readonly orgAttorneyItem: Locator;
  readonly orgAttorneyIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    // Top section
    this.logo = page.locator("img.logo");
    this.collapseArrow = page.locator("img.arrow[alt='Collapse']");
    this.expandArrow = page.locator("img.arrow[alt='Expand']");

    // User section
    this.userName = page.locator("div.name");
    this.userEmail = page.locator("div.email");

    // Menu entries
    this.settingsIcon = page.locator("img.icon[src*='settings-02']");
    this.casesIcon = page.locator("img.icon[src*='folder-file-storage']");
    this.casesLabel = page.locator("span.label", { hasText: 'Cases' });

    this.applicantsIcon = page.locator("img.icon[src*='notification-bubble']");
    this.applicantsLabel = page.locator("span.label", { hasText: 'Applicants' });

    this.orgAttorneyItem = page.locator("a.menu-item span.label", { hasText: 'Org & Attorney' });
    this.orgAttorneyIcon = page.locator("a.menu-item img.icon[src*='folder-file-storage']");
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

  async clickApplicants() {
    await this.applicantsLabel.click();
  }

  async clickOrgAttorney() {
    await this.orgAttorneyItem.click();
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
    await expect(this.applicantsLabel).toBeVisible();
    await expect(this.orgAttorneyItem).toBeVisible();
  }

  async assertCollapsed() {
    await expect(this.expandArrow).toBeVisible();
  }

  async assertExpanded() {
    await expect(this.collapseArrow).toBeVisible();
  }
}
