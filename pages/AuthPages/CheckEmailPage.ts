// pages/CheckEmailPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class CheckEmailPage {
  readonly page: Page;
  readonly emailImage: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly footerText: Locator;
  readonly resendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailImage = page.locator('img.email-image');
    this.title = page.locator('h1.email-title');
    this.description = page.locator('label.email-description');
    this.footerText = page.locator('p.email-footer');
    this.resendButton = page.locator('button.resend-button');
  }

  async assertPageVisible() {
    await expect(this.emailImage).toBeVisible();
    await expect(this.title).toHaveText('Check your email.');
    await expect(this.title).toBeVisible();
    await expect(this.description).toHaveText('We’ve sent you a recovery link.');
    await expect(this.description).toBeVisible();    
    await expect(this.footerText).toHaveText(' Didn’t get a link?  Resend ');
    await expect(this.footerText).toBeVisible();
    await expect(this.resendButton).toHaveText('Resend');
    await this.assertFooter();
    await expect(this.resendButton).toBeVisible();
    await this.assertEmailImageAttributes();
  }

  async assertEmailImageAttributes() {
    await expect(this.emailImage).toHaveAttribute('alt', 'Envelope Image');
    await expect(this.emailImage).toHaveAttribute('loading', 'lazy');
    await expect(this.emailImage).toHaveAttribute('src', '/../../../assets/images/envelope.png');
}
  async assertFooter() {
    await expect(this.footerText).toContainText("Didn’t get a link?  Resend");
    await expect(this.resendButton).toHaveText("Resend");
}
  async assertCheckEmailUrl() {
    await expect(this.page).toHaveURL(/check-email/);
    }
  }