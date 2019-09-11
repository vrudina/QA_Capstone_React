const loginPage  = require('../page-objects/login.page');
const loginData  = require('../data/data');

module.exports.loginSteps = async function (myApp, testCase) {
  var [creds,] = await loginData.getCredentials(testCase);
  
  await loginPage.enterUsercode(myApp, creds.Username);
  await loginPage.enterPassword(myApp, creds.Password);
  await loginPage.clickSubmit(myApp, creds.DialogTitleText);
  await loginPage.selectBranch(myApp, creds.Branch);
  await loginPage.clickSelect(myApp);
};