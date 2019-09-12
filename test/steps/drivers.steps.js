const driversPage  = require('../page-objects/drivers.page');
const homeSteps = require('../steps/home.steps');
const menuData  = require('../data/data');

module.exports.accessDrivers = async function (myApp, testCase, menuTestCase) {
    //select menu
    await homeSteps.accessSubMenu(myApp, testCase, menuTestCase);    
};

module.exports.addDriver = async function (myApp, testCase, menuTestCase, driverTestCase) {
    //add driver
    await this.validateDriversName(myApp, testCase, menuTestCase)
    var [driver,] = await menuData.drivers(driverTestCase);  
    await driversPage.enterLicense(myApp, driver.LicenseNumber);
    await driversPage.clickSave(myApp);  
    await driversPage.clickOk(myApp); 
};



module.exports.validateDriversName = async function ( ) {
    await this.accessDrivers(myApp, testCase, menuTestCase);
    var [driver,] = await menuData.drivers(driverTestCase);
    await driversPage.clickAdd(myApp);  
    await driversPage.enterName(myApp, driver.Name); 
    await driversPage.goButtonValidation(myApp);
};

module.exports.validateLicenseDisable = async function ( ) {
    await this.accessDrivers(myApp, testCase);
    await driversPage.clickAdd(myApp);  
};

