import { Page, Locator } from '@playwright/test'

export class ProductsPage{
// data modifiers

  readonly page: Page
  readonly title: Locator
  readonly hamburger: Locator
  readonly logoutLabel: Locator
  readonly productCollection: Locator
 
  


  constructor( page: Page) {
      this.page = page
    //this.title = page.locator( '//span[text()= "Products"]')
    // this.title = page.locator( 'text=Products')
    //this.title = page.getByText('Products')
    this.title = page.locator ( ' .title', { hasText: 'Products'})
    this.hamburger = page.locator ('[id= react-burger-menu-btn]')
    this.logoutLabel = page.locator('[id="logout_sidebar_link"]')

    this.productCollection = page.locator('[class="inventory_item_name"]')
    
  }

  async logout( ){

     this.hamburger.click()
     this.logoutLabel.click()

  }
 
async addProducts(productIndex: number){

       // nth selector de ccs el hijo que se encuentra en el index ( posicion dentro de un arreglo( lista de lementos))
      
       const product = this.productCollection.nth(productIndex)
       const productTitle = (await product.innerText()).valueOf()
       await product.click()
       return productTitle

    

}



}

