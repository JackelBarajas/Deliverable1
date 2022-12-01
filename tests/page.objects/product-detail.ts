import { Page, Locator } from '@playwright/test'

export class ProductDetails{

readonly page : Page
readonly backbutton: Locator
readonly addtoCartButton: Locator
readonly removeButton: Locator


constructor ( page: Page){
   this.page = page

   this.backbutton = page.locator ('[id="back-to-products"]')
   this.addtoCartButton = page.locator ('[class="btn btn_primary btn_small btn_inventory"]')
   this.removeButton = page.getByText('Remove')




}












}
