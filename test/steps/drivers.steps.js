const driversPage  = require('../page-objects/drivers.page');
const homeSteps = require('../steps/home.steps');
const menuData  = require('../data/data');


//This method is to login and navigate to the manage Drivers screen
module.exports.accessDrivers = async function (myApp, testCase, menuTestCase) {
    await homeSteps.accessSubMenu(myApp, testCase, menuTestCase);    
};

//This method is to validate the driver's license status
module.exports.validateLicenseDisable = async function (myApp) {
    return await driversPage.clickAdd(myApp).
    element(driversPage.licenseField).isEnabled();
};

//This method is to validate the driver's license status
module.exports.validateDriversName = async function (myApp,  driverTestCase) {
    var [driver,] = await menuData.drivers(driverTestCase); 
    await driversPage.enterName(myApp, driver.Name) 
    .pause(500);
   return await driversPage.goButtonValidation(myApp).
     element(driversPage.licenseField).isEnabled();
};

//This method is to add a driver
module.exports.saveLicense = async function (myApp, driverTestCase) {
    var [driver,] = await menuData.drivers(driverTestCase);  
    await driversPage.enterLicense(myApp, driver.LicenseNumber);
    await driversPage.clickSave(myApp);  
};

//This method is to validate the row highlighted in the grid
// module.exports.validateHighlightedDriver = async function (myApp, driverTestCase) {
//     var [isDriverAdded, resultMsg] = await this.addDriver(myApp, testCase, menuTestCase, driverTestCase);

//     var testResult = [];    
//     var msg = resultMsg;
//     var testState = true;

//     if(isDriverAdded) {
//         var [driver,] = await menuData.drivers(driverTestCase);
//         var expectedText = driver.Name + " " + driver.LicenseNumber + " " + driver.Retired;
    
//         var highlightedRow = await driversPage.highlightedRowInGrid(myApp);
//         var highlightedName  = await driversPage.highlightedNameInGrid(myApp);
//         var highlightedLic = await driversPage.highlightedLicInGrid(myApp);
//         var highlightedRet = await driversPage.highlightedRetiredInGrid(myApp);
    
//         if(highlightedRow === expectedText) {
//             msg += " Driver was added and correct row is highlighted.";
//         }
//         else {
//             msg += " Driver data in grid does not match test data.";

//             if(highlightedName !== driver.Name) {
//                 msg += " Driver name in grid does not match test data.";
//                 // console.log(detailMsg);
//             }

//             if(highlightedLic !== driver.Lic) {
//                 msg += " Driver license in grid does not match test data.";
//                 // console.log(detailMsg);
//             } 

//             if((highlightedRet !== driver.Retired)) {
//                 msg += " Driver retired state in grid does not match test data.";
//                 // console.log(detailMsg);
//             }

//             testState = true;
//         }
//     }
//     else {
//         msg += " Driver was not added.";

//         testState = false;
//     }

//     testResult.push(testState);
//     testResult.push(msg);
//     return testResult;
//};


