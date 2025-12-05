import { Page, Locator, expect } from '@playwright/test';

export class AttorneyProfilePageCases {
  readonly page: Page;
  readonly profileImage: Locator;
  readonly avatar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileImage = page.locator('profile-img');
    this.avatar = page.locator('avatar')
  }

  // GETTERS
  async assertAttorneyImageProfile(){
    await expect(this.profileImage).toBeVisible();
  }
  
  async assertAvatarImage(){
    await expect(this.avatar).toBeVisible();
  }

  async assertAttorneyProfileCasesUrl() {
  // Promeni regex po potrebi na pravi URL
  await expect(this.page).toHaveURL('**/attorney-profile/cases', { timeout: 10000 });
}



}