const homePage  = require('../page-objects/home.page');

module.exports = {
 //properties of login form
  usercodeID : '#inputLoginUsercode',
  passwordID : '#inputLoginPassword',
  loginButtonID : '#buttonLoginLoginButton',
  
  //properties of branch selection dialog
  dialogTitleID : '.k-window-title.k-dialog-title',
  branchSelectInputID : '.k-input', 
  branchListBoxID : '#root > div > div > div > div.k-dialog-wrapper > div.k-widget.k-window.k-dialog > div.k-content.k-window-content.k-dialog-content > div > div:nth-child(1) > span > span', 
  branchOptionID : '.k-animation-container.k-animation-container-relative.k-list-container.k-reset',
  branchOptionListID : '.k-animation-container.k-animation-container-relative.k-list-container.k-reset.k-animation-container-shown',
  branchSelectButtonID : '#buttonLoginDialogSelectBranch',
  branchCancelButtonID : '#buttonLoginDialogCancelBranch',

};

module.exports.enterUsercode = function(input, user) {
  return input
  .click(this.usercodeID)
  .element(this.usercodeID).keys(user)
};

module.exports.enterPassword = function(input, password) {
  return input
  .click(this.passwordID)
  .element(this.passwordID).keys(password)
};

module.exports.clickSubmit = function(input, text) {
  return input
  .click(this.loginButtonID)
  .waitUntilTextExists(this.dialogTitleID, text);
};

module.exports.selectBranch = function(input, branch) {
  return input
  .click(this.branchListBoxID)
  .element(this.branchSelectInputID).keys(branch)
  .waitUntilTextExists(this.branchListBoxID, branch)
  .click(this.branchListBoxID)
  .pause(500); //wait for dropdown list to close
};

module.exports.clickSelect = function(input) {
  return input
  .click(this.branchSelectButtonID)
  .waitUntilTextExists(homePage.landingPageTitleID, homePage.landingPageTitleText)
  .pause(400)
};

module.exports.clickCancel = function(input) {
  return input
  .click(this.branchCancelButtonID);
};

module.exports.branchSelectionText = function(input) {
  return input
  .pause(500)
  .element(this.branchSelectInputID).getText();
};

module.exports.dialogTitleText = function(input) {
  return input
  .pause(500)
  .element(this.dialogTitleID).getText();
};

