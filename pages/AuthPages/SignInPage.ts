import { Page, Locator, expect } from '@playwright/test';

export class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // LOCATORS
  get emailInput() {
    return this.page.locator('#email');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get signInButton() {
    return this.page.getByRole('button', { name: /Sign in/i });
  }

  get spinner() {
    return this.page.locator('.spinner-container');
  }

  get staticPart() {
    return this.page.locator('.static-part');
  }

  get logoImg() {
    return this.page.locator('img.logo-img');
  }

  get errorMessageWrongEmailOrPassword() {
    return this.page.getByText('Wrong email or password');
  }

  get errorMessageEmailCantBeEmpty() {
    return this.page.getByText('Email can’t be empty');
  }

  get errorMessageInvalidEmailFormat() {
    return this.page.getByText('Invalid email format');
  }

  // NAVIGATION
  async goto() {
    await this.page.goto('/sign-in');
  }

  // ACTIONS
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  // ASSERTIONS
  async assertWrongEmailOrPassword() {
    await expect(this.errorMessageWrongEmailOrPassword).toBeVisible();
  }

  async assertEmailCantBeEmpty() {
    await expect(this.errorMessageEmailCantBeEmpty).toBeVisible();
  }

  async assertInvalidEmailFormat() {
    await expect(this.errorMessageInvalidEmailFormat).toBeVisible();
  }

  async assertLogoIsVisible() {
    await expect(this.logoImg).toBeVisible();
    await expect(this.logoImg).toHaveAttribute('src', 'assets/images/immigration-pathways.svg');
    await expect(this.logoImg).toHaveAttribute('alt', 'Logo');
  }

  async assertRedirectAfterLogout() {
    await expect(this.page).toHaveURL(/sign-in/);
  }
}
