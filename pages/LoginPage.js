
const {test,expect} = require ('@playwright/test');
const appconst = require ('../constants/AppConstants');
const commmethod = require('../utils/CommonMethod');

class LoginPage
{

    constructor (page)
    {
        this.page = page

        this.inputusername = page.getByPlaceholder('Username');
        this.inputpassword = page.getByPlaceholder('Password');
        this.loginbutton = page.getByRole('button',{name:'Login'});
        this.logintitle = page.getByRole('heading',{name:'Login'});
        this.errorMessage = page.locator('.oxd-input-field-error-message');
    }
 
     async verifylogintitle()
          {
               await expect (this.logintitle).toBeVisible();
          } 

           async userLogin(username,password)
    {
        await commmethod.InputTextBox(this.inputusername,username);
        await commmethod.InputTextBox(this.inputpassword,password);
        await commmethod.click(this.loginbutton);
        
    }
         
   }

   module.exports = LoginPage;


