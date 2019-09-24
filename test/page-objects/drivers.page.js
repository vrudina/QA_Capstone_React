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
    goButton : '//*[@id="root"]/div/div/div/div/form/div[1]/div[1]/button',


    //Header and Fields

    mainHeaderText : 'Manage Drivers',
    nameField : '#inputDriversName',
    licenseField : '#inputDriversLicenseNumber',

    
    //Dialog boxes

    dialogBox : '//*[@id="root"]/div/div/div/div[2]/div[2]/div[2]/p',
    okButton : "#buttonDriversDialogOk",

        //Grids

    entrySelected : '.k-master-row.k-state-selected',
    entrySelectedName : '.k-master-row.k-state-selected > td:nth-child(1)',
    entrySelectedLic : '.k-master-row.k-state-selected > td:nth-child(2)',
    entrySelectedRetired : '.k-master-row.k-state-selected > td:nth-child(3)',
    

    //Dropdowns

    retiredDropdown : '.k-dropdown-wrap.k-state-default'



   };
   
   //---Functions---//

    //Buttons

      module.exports.clickAdd = function(input) {
        return input
        .click(this.addButton)
        .pause(500)
      };

      module.exports.clickEdit = function(input) {
        return input
        .click(this.editButton)
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


    //Fields

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

    //Text

      module.exports.dialogBoxMessage = function(input) {
        return input
        .element(this.dialogBox).getText();
      };

      module.exports.entrySelectedInGrid = function(input) {
        return input
        .element(this.entrySelected).getText().then( function(text) {
          console.log('      Driver selected: ' + text)});
      };

      module.exports.manageDriversPageLegend = function(input) {
        return input
        .pause(500)
        .waitUntilTextExists(this.manageDriversLegendID, this.manageDriversLegendText)
        .element(this.manageDriversLegendID).getText();
      };

    //Field Validations

    module.exports.licenseFieldColor = function(input) {
      return input
      .click(this.licenseField)
      .element(this.licenseField).getCSSProperty('color').then( function(colorField) {
        console.log('      Color of field ' + colorField)});
    };

    
    //Grid

    module.exports.entrySelectedInGrid = function(input) {
      return input
      .element(this.entrySelected).getText().then( function(text) {
        console.log('      Driver selected: ' + text)});
    };
    
    module.exports.highlightedRowInGrid = function(input) {
      input
      .element(this.entrySelected[0]).getText().then( function(text) {
        console.log('      Driver highlighted: ' + text)
      })
      return input
      .element(this.entrySelected)
      .element(this.entrySelected[0]).getText();
    };
    
    module.exports.highlightedNameInGrid = function(input) {
      input
      // .element(this.entrySelectedName)
      .element(this.entrySelectedName).getText().then( function(text) {
        console.log('      Driver name highlighted: ' + text)
      });
      return input
      // .element(this.entrySelectedName)
      .element(this.entrySelectedName).getText();
    };
    
    module.exports.highlightedLicInGrid = function(input) {
      input
      // .element(this.entrySelectedLic)
      .element(this.entrySelectedLic).getText().then( function(text) {
        console.log('      Driver license highlighted: ' + text)
      });
      return input
      // .element(this.entrySelectedLic)
      .element(this.entrySelectedLic).getText();
    };
    
    module.exports.highlightedRetiredInGrid = function(input) {
      input
      // .element(this.entrySelectedRetired)
      .element(this.entrySelectedRetired).getText().then( function(text) {
        console.log('      Driver retired state highlighted: ' + text)
      });
      return input
      // .element(this.entrySelectedRetired)
      .element(this.entrySelectedRetired).getText();
    };