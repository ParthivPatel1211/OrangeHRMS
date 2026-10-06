
const {test,expect} = require ('@playwright/test');

class CommonMethod
{
    constructor (page)
    {
         this.page = page;
    }


      static async click(locator)
      {
          if (await locator.isVisible() && await locator.isEnabled())
          {
                  locator.click();
          }
      }
   static async InputTextBox (locator,value)

   {
       if (await locator. isVisible() && await locator.isEnabled())
            {
                 await locator.fill(value)
            }
   }

   static async SelectDropdown (locator, value)
        {
            await locator.SelectOption(value);
        }

}

module.exports = CommonMethod;