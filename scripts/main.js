(function(window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]'

    //Let's make sure we only have on of these:
    let app = window.App;
    let Truck = App.Truck
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler

    let myTruck = new Truck('1234', new DataStore());

    window.myTruck = myTruck;

    //find the form that is being submitted and create a formHander object
    let formHandler = new FormHandler(FORM_SELECTOR);
    //bind the createOrder to a specific truck and pass it to addSubmitHandler
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);
