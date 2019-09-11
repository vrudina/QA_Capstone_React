module.exports = {

  //Text
  landingPageTitleID : '#main > h2',
  landingPageTitleText : "Capstone Main Menu",
  landingPageInfoID : '#main',

  //Buttons
  logoutButton : '.k-button.Logout-button',
};

module.exports.landingPageConfirmationText = function(input) {
  return input
  .pause(500)
  .element(this.landingPageTitleID).getText();
};

module.exports.mainMenu = function(input, menu) {
 //select all span elements whose text = ""
  let clickableMenuItem = '//span[text()= "' + menu + '"]'; 

  return input 
  .element(clickableMenuItem)
  .getText().then( function(text) {
      console.log('      looking at : ' + text)})
  .click(clickableMenuItem)
  .pause(100);
};

module.exports.menuNavigation = function(input, submenu) {
  //changed 8/18
    //select all div elements whose divs contains ""
    let subMenuItem = '//div[contains(div,"' + submenu + '")]';
  
    //select all span elements that have text = ""
    let clickableSubMenuItem = '//span[text()= "' + submenu + '"]';
  
    return input
    .click(subMenuItem)
    .element(clickableSubMenuItem)
    .getText().then( function(text) {
        console.log('      looking at : ' + text)})
    .click(clickableSubMenuItem)
    .pause(500);
  };

module.exports.clickLogout = function(input) {
  return input
  .click(this.logoutButton)
  .pause(500);
};

