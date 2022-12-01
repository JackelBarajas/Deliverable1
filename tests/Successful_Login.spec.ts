import { test, expect } from '@playwright/test';
import {LoginPage} from './page.objects/login-page'
import { ProductsPage} from './page.objects/products-page'
import { URL } from  './data/constants'
import "dotenv/config"

test ('As a user , I want to be able to log in successfully into the saucedemo site @success_Login', async ({ page }) =>{
     // instatiate clasess

const loginPage = new LoginPage (page)
const productsPage = new ProductsPage (page)

  
await page.goto (URL.baseUrl)

// login page

await loginPage.usernameField.fill(process.env.usuarioname)
await loginPage.passwordField.fill(process.env.userpassword)
await loginPage.loginButton.click()

    // products page is expected

await expect (productsPage.title).toBeVisible()




});