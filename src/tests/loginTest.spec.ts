import { test, expect } from '@playwright/test'; // Correct import from Playwright  
import LoginPage from '../pages/LoginPage'; // Adjusted import path as necessary

test.describe('Login Test', () => {
    test.use({ viewport: { width: 700, height: 600 } });
    test('test', async ({ page }) => { // Destructure page from the test context  
        const loginPage = new LoginPage(page); // Pass the page object to the LoginPage constructor

        await loginPage.navigateToLoginPage();
        await loginPage.fillUsername("maker1");
        await loginPage.fillPassword("Cbl#1234");

        const homePage = await loginPage.clickLoginButton(); // Ensure this method returns homePage  
        await homePage.expectServiceTitleToBeVisible(); // Call expect method on homePage  
    });
});