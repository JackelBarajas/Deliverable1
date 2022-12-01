import { test, expect } from '@playwright/test';
import {LoginPage} from './page.objects/login-page'
import { ProductsPage} from './page.objects/products-page'
import { URL } from  './data/constants'
import "dotenv/config"

test.describe ('Smoke test execution @smoke'  ,()  => {
     let loginPage: LoginPage
     let productsPage: ProductsPage
    //hooks before or after test or groups of test
    test.beforeEach(async (  {page}) =>{
             // instatiate clases
         loginPage = new LoginPage (page)
         productsPage = new ProductsPage (page)
             
        await page.goto (URL.baseUrl)
          // login page: Enter credentials
        await loginPage.usernameField.fill(process.env.usuarioname)
        await loginPage.passwordField.fill(process.env.userpassword)
        await loginPage.loginButton.click()
     })
    
    
    test ('As a user , I want to be able to log in successfully into the saucedemo site', async ({ page }) =>{  
       // products page is expected
       await expect (productsPage.title).toBeVisible()
    });
   
   test ('As a user , I want to be able to select any product from product page',  async ({ page }) =>{
       await expect( productsPage.title).toBeVisible()
        //select any product and validate  name product
        const productTitle =  await productsPage.addProducts(0) 
        });

   test ('As a user , I want to be able to logout @logout', async ({ page }) =>{

      await expect(productsPage.title).toBeVisible()
     
     //function Logout
     await productsPage.logout()
     
     await expect(loginPage.loginButton).toBeVisible()
     
     
     });
     

})




