import { Page, expect } from '@playwright/test';

export class AttorneyProfilePageCases {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // GETTERS





  async assertAttorneyProfileCasesUrl() {
  // Promeni regex po potrebi na pravi URL
  await expect(this.page).toHaveURL(/attorney=profile|cases/);
}



}