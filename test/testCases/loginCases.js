const expect    = require('chai').expect;
const hooks     = require('../hooks');
//const loginPage  = require('../page-objects/login.page');
const homePage  = require('../page-objects/home.page');
const testSteps = require('../steps/login.steps');
const testData  = require('../data/data');

module.exports.successSteps = async function(testCase) {

describe('testCase', async function() {

  before(async function() { 
    app = await hooks.startApp();
    myApp = app.client;
  });

  after(async function() {   
   // await hooks.stopApp(app);
   await homePage.clickLogout(myApp);
  });

  
    it('Login', async function() {

      await testSteps.loginSteps(app.client,testCase);
      
      var header   = await homePage.landingPageConfirmationText(app.client);
      var [expected,] = await testData.getCredentials(testCase);
      expect(header).to.contain(expected.MainMenu);


   });
   
   });
};