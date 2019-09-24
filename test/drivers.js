const testCase = require('./testCases/driversCases');

describe("Successful scenarios", function() {

  testCase.addDrivers("WsUser", "Access Drivers", "ValidDriver");
  //testCase.addDuplicateDrivers("WsUser", "Access Drivers", "DuplicateDriver");


});