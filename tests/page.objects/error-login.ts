import { Page, Locator } from '@playwright/test'

export class Errors{
 // data modifiers

    readonly page :Page
    readonly warning : Locator



    constructor (page: Page){
    this.page = page
    this.warning = page.getByText('Epic sadface: Username and password do not match any user in this service')


    }



}
