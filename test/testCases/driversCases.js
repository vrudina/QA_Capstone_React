const expect    = require('chai').expect;
const hooks     = require('../hooks');

const driversPage  = require('../page-objects/drivers.page');
const testSteps = require('../steps/drivers.steps');
const testData  = require('../data/data');

module.exports.addDuplicateDrivers = async function(testCase, menuTestCase, driverTestCase) {

  describe('Driver test - Detect duplicate driver', function() {

    beforeEach(async function() {
      app = await hooks.startApp();
      myApp = app.client;
    });

     after(async function() {
       // await homePage.clickLogout(myApp);
    //   await hooks.stopApp(app);
     });

    // This test accesses the Manage Drivers screens
    it('Validate duplicate driver is detected', async function() {

      var [isAdded, resultMsg] = await testSteps.addDriver(myApp, testCase, menuTestCase, driverTestCase);
      var msg = resultMsg;

      if(!isAdded) {
        msg += " No driver added."
      }
      else {
        msg += " Driver added.";
      }
      
      expect(!isAdded,msg).to.be.true; //Expected
      console.log(msg);
    });

    // it('Validate row with new driver is highlighted', async function() {

    //   var [expected,] = await testData.drivers(driverTestCase);
    //   console.log("      Driver test data: " + expected.Name + " " + expected.LicenseNumber + " " + expected.Retired);

    //   //Row with the new driver is highlighted after Save
    //   var [test, msg] = await testSteps.validateHighlightedDriver(myApp, testCase, menuTestCase, driverTestCase);

    //   expect(test, msg).to.be.true; //Expected
    //   console.log(msg);
    // });

  });

};

module.exports.addDrivers = async function(testCase, menuTestCase, driverTestCase) {

  describe('Driver test - Confirm Add New and Row is Hightlighted', function() {

    beforeEach(async function() {
      app = await hooks.startApp();
      myApp = app.client;
    });

     after(async function() {
       // await homePage.clickLogout(myApp);
    //   await hooks.stopApp(app);
     });

    // This test accesses the Manage Drivers screens
    it('Confirm license field is not enabled when add driver', async function() {

      var isEnabled = await testSteps.validateLicenseDisable(myApp, testCase, menuTestCase);
      var msg = "";
     
      //var dialogText   = await driversPage.dialogBoxMessage(app.client);
      //var [expected,] = await testData.errorMessages(testCase);
      if(!isEnabled) {
        msg = " License field is not enabled initially in Add screen."
      }
      else {
        msg = " License field is enabled initially in Add screen.";
      }
      
      expect(!isEnabled,msg).to.be.true; //Expected
      console.log(msg);
    });

    it('Validate row with new driver is highlighted', async function() {

      var [expected,] = await testData.drivers(driverTestCase);
      console.log("      Driver test data: " + expected.Name + " " + expected.LicenseNumber + " " + expected.Retired);

      //Row with the new driver is highlighted after Save
      var [test, msg] = await testSteps.validateHighlightedDriver(myApp, testCase, menuTestCase, driverTestCase);

      expect(test, msg).to.be.true; //Expected
      console.log(msg);
    });

  });

};