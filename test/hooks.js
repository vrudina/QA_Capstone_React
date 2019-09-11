const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

module.exports = {
  async startApp() {
    const app = await new Application({
      path: 'C:/Users/Karen/AppData/Local/Programs/capstone/Capstone_React.exe'
    }).start();
    chaiAsPromised.transferPromiseness = app.transferPromiseness;
    return app;
},

  async stopApp(app) {
    if (app && app.isRunning()) {
      await app.stop();
    }
  }
};
