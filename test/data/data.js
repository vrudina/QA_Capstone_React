const alasql = require('alasql');
const file   = require('./file.data');

module.exports.getCredentials = function(testCase) {
  var fullFileName =  file.filePath+file.fileName;
  var sheetName = file.credentialsSheetName;
  var colHeaders = "true";

  return alasql.promise('SELECT Username, Password, Branch, DialogTitleText, MainMenu FROM XLSX( ?, { sheetid: ?, header: ? }) WHERE TestCase = ? ', [fullFileName, sheetName, colHeaders, testCase]);
};

module.exports.menu = function(testCase) {
  var fullFileName =  file.filePath+file.fileName;
  var sheetName = file.menuSheetName;
  var colHeaders = "true";

  return alasql.promise('SELECT MainMenu,	Submenu1 FROM XLSX( ?, { sheetid: ?, header: ? }) WHERE TestCase = ? ', [fullFileName, sheetName, colHeaders, testCase]);
};

module.exports.drivers = function(testCase) {
  var fullFileName =  file.filePath+file.fileName;
  var sheetName = file.driversSheetName;
  var colHeaders = "true";

  return alasql.promise('SELECT Name, LicenseNumber FROM XLSX( ?, { sheetid: ?, header: ? }) WHERE TestCase = ? ', [fullFileName, sheetName, colHeaders, testCase]);
};

module.exports.errorMessages = function(testCase) {
  var fullFileName =  file.filePath+file.fileName;
  var sheetName = file.errorMessageSheetName;
  var colHeaders = "true";

  return alasql.promise('SELECT Error Message FROM XLSX( ?, { sheetid: ?, header: ? }) WHERE TestCase = ? ', [fullFileName, sheetName, colHeaders, testCase]);
};