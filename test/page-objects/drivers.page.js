module.exports = {
//This contains all the elements in the DOM for Manage Drivers as well as adding the actions to those elements

   //Page Title

    manageDriversLegendID : '//*[@id="root"]/div/div/div/div/legend',

    //Buttons

    addButton : '#buttonDriversAdd',
    editButton : "#buttonDriversEdit",
    deleteButton : '#buttonDriversDelete',
    exportButton : '#buttonDriversExport',
    saveButton : '#buttonDriversSave',
    cancelButton : '#buttonDriversCancel',
    backButton : '#buttonDriversBack',
    goButton : '.k-button',


    //Header and Fields

    mainHeaderText : 'Manage Drivers',
    nameField : '#inputDriversName',
    licenseField : '#inputDriversLicenseNumber',

    //Dialog boxes

    dialogBox : '//*[@id="root"]/div/div/div/div[2]/div[2]/div[2]/p',
    okButton : "#buttonDriversDialogOk",

        //Grids

    entrySelected : '.k-master-row.k-state-selected',

    //Dropdowns

    retiredDropdown : '.k-dropdown-wrap.k-state-default'



   };
   

      module.exports.clickAdd = function(input) {
        return input
        .click(this.addButton)
        .pause(500)
      };

      module.exports.clickSave = function(input) {
        return input
        .click(this.saveButton)
        .pause(500)
      };

      module.exports.goButtonValidation = function(input) {
        return input
        .click(this.goButton)
        .pause(500)
      };


      module.exports.clickOk = function(input) {
        return input
        .click(this.okButton)
      };

      module.exports.enterName = function(input, name) {
        return input
        .click(this.nameField)
        .element(this.nameField).keys(name)

      };

      module.exports.enterLicense = function(input, license) {
        return input
        .click(this.licenseField)
        .element(this.licenseField).keys(license)
      };

      module.exports.manageDriversPageLegend = function(input) {
  return input
  .pause(500)
  .waitUntilTextExists(this.manageDriversLegendID, this.manageDriversLegendText)
  .element(this.manageDriversLegendID).getText();
};


module.exports.dialogBoxMessage = function(input) {
  return input
  .element(this.dialogBox).getText();
};

module.exports.entrySelectedInGrid = function(input) {
  return input
  .element(this.entrySelected).getText().then( function(text) {
    console.log('      Driver selected: ' + text)});
};
