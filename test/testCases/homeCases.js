//const expect    = require('chai').expect;
const hooks     = require('../hooks');
const testSteps = require('../steps/home.steps');

module.exports.accessMainMenus = async function(testCase, menuTestCase) {

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
    it('Access Main menu', async function() {

      await testSteps.accessSubMenu(myApp, testCase, menuTestCase);

    });

  });

}