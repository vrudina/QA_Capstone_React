const expect    = require('chai').expect;
const hooks     = require('../hooks');

const driversPage  = require('../page-objects/drivers.page');
const testSteps = require('../steps/drivers.steps');
const testData  = require('../data/data');

module.exports.addDrivers = async function(testCase, menuTestCase, driverTestCase) {

  describe('Driver test', function() {

    before(async function() {
      app = await hooks.startApp();
      myApp = app.client;
    });

     after(async function() {
       // await homePage.clickLogout(myApp);
    //   await hooks.stopApp(app);
     });

    //This test accesses the Manage Drivers screens
    it('Add a driver successfully', async function() {

      var test = await testSteps.validateLicenseDisable(myApp, testCase, menuTestCase);
      
     
      //var dialogText   = await driversPage.dialogBoxMessage(app.client);
      //var [expected,] = await testData.errorMessages(testCase);
      console.log("The test is correct returning false.");
      expect(test).to.be.false; //Expected
    });

  });

};