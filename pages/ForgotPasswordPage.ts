import { Page, expect } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // GETTERS
  get titleLabel() {
    return this.page.locator("//label[@class='title-label']");
  }

  get descriptionLabel() {
    return this.page.locator("//label[@class='description']");
  }

  get emailLabel() {
    return this.page.locator("//label[@for='email']");
  }

  get emailInput() {
    return this.page.locator("//input[@id='email']");
  }

  get errorMessageEmptyEmail() {
    return this.page.locator("//span[@class='error-message']");
  }

  get errorMessageInvalidEmailFormat() {
    return this.page.locator("//span[@class='error-message']");
}

  get sendLinkButton() {
    return this.page.locator("//button[contains(text(),'Send link')]");
  }

  get buttonIcon() {
    return this.page.locator("//img[@class='button-icon']");
  }

  // METHODS
  async goto() {
    await this.page.goto('/forgot-password'); // koristi baseURL iz config-a
  }

  async submitEmail(email: string) {
    await this.emailInput.fill(email);
    await this.sendLinkButton.click();
  }

  // ASSERTIONS
  async assertPageElementsVisible() {
    await expect(this.titleLabel).toBeVisible();
    await expect(this.descriptionLabel).toBeVisible();
    await expect(this.emailLabel).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.sendLinkButton).toBeVisible();
    await expect(this.buttonIcon).toBeVisible();
  }

  async assertEmailEmptyError() {
    await expect(this.errorMessageEmptyEmail).toBeVisible();
    await expect(this.errorMessageEmptyEmail).toHaveText("Email can’t be empty");
  }

  async assertInvalidEmailFormatError() {
  await expect(this.errorMessageInvalidEmailFormat).toBeVisible();
  await expect(this.errorMessageInvalidEmailFormat).toHaveText("Invalid email format");
}
  
}
