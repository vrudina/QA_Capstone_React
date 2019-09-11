const windowCount = 1;

module.exports = {
  //properties of login form
  serverLabelID : '.Login-server-label',
  serverLabelText : "Server:",
};

module.exports.loadLoginForm = function(app) {
  return app.client.getWindowCount()
  .should.eventually.equal(windowCount)
  .waitUntilTextExists(this.serverLabelID, this.serverLabelText)
  .pause(100);
};

module.exports.loginFormServerText = function(input) {
  return input
  .element(this.serverLabelID).getText();
};