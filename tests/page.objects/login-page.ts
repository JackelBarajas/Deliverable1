import{ Page, Locator } from '@playwright/test'

export class LoginPage{
   // data modifiers
   readonly page: Page
   readonly usernameField: Locator 
   readonly passwordField: Locator
   readonly loginButton: Locator
   

   constructor(page: Page){
    //web elements
      this.page = page 
      this.usernameField = page.locator('[data-test= "username"]')
      this.passwordField = page.locator('[data-test= "password"]')
      this.loginButton = page.locator ('[data-test="login-button"]')
      
      
         

   }




}