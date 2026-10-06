
const { test, expect } = require('../fixtures/fixture');
const jsreader = require('../utils/jsonreader');
require('../hooks/hook');

test('TC001 Validate blank username and password', async ({ loginPage }) => {
  const loginData = jsreader.Login();
   await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.BlankUsernamePassword.Username,
    loginData.BlankUsernamePassword.Password
  );
       await loginPage.errorMessage.first().waitFor({ state: 'visible' });
       //await loginPage.validationmessage();
});

test('TC002 InvalidusernameValidPassword', async ({ loginPage }) => {
  const loginData = jsreader.Login();
  //await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.InvalidUserLogin.Username,
    loginData.InvalidUserLogin.Password
  );
});

test('TC003 WrongPasswordLogin', async ({ loginPage }) => {
  const loginData = jsreader.Login();
 // await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.InvalidPasswordLogin.Username,
    loginData.InvalidPasswordLogin.Password
  );
});

test('TC004 USernotRegistered', async ({ loginPage }) => {
  const loginData = jsreader.Login();
  //await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.UsernotRegistered.Username,
    loginData.UsernotRegistered.Password
  );
});

test('TC005 SqlinjectionUsername', async ({ loginPage }) => {
  const loginData = jsreader.Login();
  //await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.SqlinjectionUsername.Username,
    loginData.SqlinjectionUsername.Password
  );
});

test('TC006 SqlinjectionPassword', async ({ loginPage }) => {
  const loginData = jsreader.Login();
 // await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.SqlinjectionPassword.Username,
    loginData.SqlinjectionPassword.Password
  );
});

test('TC007 ValidCredentials', async ({ loginPage }) => {
  const loginData = jsreader.Login();
  //await loginPage.verifylogintitle();
  await loginPage.userLogin(
    loginData.ValidCredentials.Username,
    loginData.ValidCredentials.Password
  );
  
});