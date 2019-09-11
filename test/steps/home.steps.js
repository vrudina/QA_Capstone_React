const homePage  = require('../page-objects/home.page');
const loginSteps = require('../steps/login.steps');
const menuData  = require('../data/data');

module.exports.accessSubMenu = async function (myApp, testCase, menuTestCase) {

    //select menu
    await loginSteps.loginSteps(myApp, testCase);
    var [menu,] = await menuData.menu(menuTestCase);
    await homePage.mainMenu(myApp, menu.MainMenu);
    await homePage.menuNavigation(myApp, menu.Submenu1);
    
};

module.exports.accessMainMenu = async function (myApp, testCase, menuTestCase) {
    var [menu,] = await menuData.menu(menuTestCase);
    //select menu
    await loginSteps.loginSteps(myApp, testCase);
    await homePage.mainMenu(myApp, menu.MainMenu);
    
};

