import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";


export default class LoginPage {
  private readonly usernameInputSelector = "#username";
  private readonly passwordInputSelector = "#password";
  private readonly loginButtonSelector = "#Login";
    static clickLoginButton: any;

  constructor(private page: Page) {

  }


  async navigateToLoginPage() {
    await this.page.goto("https://citylive-devcustomer.thecitybank.com/auth");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameInputSelector).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
  }

  async clickLoginButton() {
    await this.page
      .getByRole('button', { name: 'Proceed' })
      .click()
      .catch((error) => {
        console.error(`Error clicking login button: ${error}`);
        throw error; // rethrow the error if needed
      });
    

    const homePage = new HomePage(this.page);
    return homePage;
  }
}
