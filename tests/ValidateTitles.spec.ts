import { test, expect } from '@playwright/test';
import { URL, CREDENTIALS} from './data/constants'
import {LoginPage} from './page.objects/login-page'
import { ProductDetails } from './page.objects/product-detail';
import { ProductsPage} from './page.objects/products-page'



test ('As a user , I want to be able to navigate to the following sections and validate the url and  buttons @pageDetails',  async ({ page }) =>{

const loginPage = new LoginPage (page)
const productsPage = new ProductsPage (page)
const productDetails = new ProductDetails (page)

await page.goto(URL.baseUrl)


await loginPage.usernameField.fill(CREDENTIALS.username)
await loginPage.passwordField.fill(CREDENTIALS.password)
await loginPage.loginButton.click()

//validate URL Products page
expect( page.url()).toBe('https://www.saucedemo.com/inventory.html')

// validate the Product title is displayed.
await expect( productsPage.title).toBeVisible()

//select the second product in the list
const productTitle =  await productsPage.addProducts(1) 
// validate product name
const NameProduct =  page.locator ('[class="inventory_details_name large_size"]')   
await expect( NameProduct).toContainText(productTitle)


// validate the back product button in the Product details page.
await expect (productDetails.backbutton).toBeVisible()

// Validate the user is able to add the product
await productDetails.addtoCartButton.click()

// validate the Remove button is displayed 
await expect (productDetails.removeButton).toBeVisible()



});