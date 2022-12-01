import { test, expect } from '@playwright/test';
import { URL, CREDENTIALS} from './data/constants'
import {LoginPage} from './page.objects/login-page'
import { ProductsPage} from './page.objects/products-page'


test ('As a user , I want to be able to select any product to my car @chooseProduct',  async ({ page }) =>{

const loginPage = new LoginPage (page)
const productsPage = new ProductsPage (page)


await page.goto(URL.baseUrl)


await loginPage.usernameField.fill(process.env.usuarioname)
await loginPage.passwordField.fill(process.env.userpassword)
await loginPage.loginButton.click()

await expect( productsPage.title).toBeVisible()

//select any prodcut and validate  name product

const productTitle =  await productsPage.addProducts(0) 

const NameProduct =  page.locator ('[class="inventory_details_name large_size"]')   
await expect( NameProduct).toContainText(productTitle)


});