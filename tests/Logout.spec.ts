import { test, expect } from '@playwright/test';
import { URL, CREDENTIALS} from './data/constants'
import {LoginPage} from './page.objects/login-page'
import {ProductsPage} from './page.objects/products-page'


test ('As a user , I want to be able to logout @success_logout', async ({ page }) =>{

    const loginPage = new LoginPage (page)
    const productsPage = new ProductsPage (page)

await page.goto(URL.baseUrl)
    
 await loginPage.usernameField.fill(CREDENTIALS.username)
 await loginPage.passwordField.fill(CREDENTIALS.password)
 await loginPage.loginButton.click()
 
 await expect(productsPage.title).toBeVisible()

//function Logout
await productsPage.logout()

await expect(loginPage.loginButton).toBeVisible()




});
