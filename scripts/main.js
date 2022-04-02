(function(window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]'
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    //Let's make sure we only have on of these:
    let App = window.App;
    let Truck = App.Truck
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler
    let CheckList = App.CheckList;

    let myTruck = new Truck('1234', new DataStore());
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    window.myTruck = myTruck;

    //find the form that is being submitted and create a formHander object
    let formHandler = new FormHandler(FORM_SELECTOR);
    //when the submit button is called, create the order and add a checkbox
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

})(window);
