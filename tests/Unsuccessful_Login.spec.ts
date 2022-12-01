import { test, expect } from '@playwright/test';
import { URL} from  './data/constants'
import {LoginPage} from './page.objects/login-page'
import {Errors} from './page.objects/error-login'


test ('A user , I want to see a warning error when the log in is incorrect @failedLogin', async ({ page } )=>{

const loginPage = new LoginPage (page)
const errorsLogin = new Errors (page)

await page.goto(URL.baseUrl )
//login in using invalid credentials
await loginPage.usernameField.fill('Jack')
await loginPage.passwordField.fill ('test123')
await loginPage.loginButton.click()

// Validate the warning error "Epic sadface: Username and password do not match any user in this service'"

await expect (errorsLogin.warning).toBeVisible()

});


