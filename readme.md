# Deliverable 1: Front End

This project is an automation framework for Front-End testing applying the best practices of automation course.
The tools used : Playwright with Typescript.
Browser as default: Chromium

The project contains the following test cases from saucedemo web page:

- Successfull login
- Unsuccessfull login 
- Logout
- Add any product to the cart
- Navigate in product details page
- Smoke test: Successful login, choose a product and logout.

## Installation
 1. Clone the repository

 ```
 git clone https://github.com/JackelBarajas/Deliverable1.git
 ```

2. Install dependencies
```
npm i
```
3. Run the following command to execute the test cases and see the visual reporter the tests.
```
npm run smoke
npm run login
npm run logout
npm run failedLogin
npm run chooseProduct
npm run pageDetails
```
4. Run the following command to execute the report
```
npx playwright show-report
```