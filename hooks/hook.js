const SsHelper = require ('../utils/ScreenshotHelper.js')
const Appconst = require ('../constants/AppConstants.js');
const {test , expect} = require ('@playwright/test'); 


test.beforeAll(async () => 

    {
          console.log(" Test case Execution Started")

    } 
);

    test.beforeEach (async ({page}) =>
    {
         await page.goto(Appconst.BASE_URL)

    }
);

test.afterEach (async ({page} , testinfo) =>

{
         if(testinfo.status!== testinfo.expectedStatus)
         {
            await SsHelper.capture(page,testinfo.title.replace(/\s+/g, "_"));

            console.log("Screenshot Captured : " + testinfo.title);
         }

}

);

test.afterAll (async () =>

{
    console.log("Test Case Execution Completed");

}

);