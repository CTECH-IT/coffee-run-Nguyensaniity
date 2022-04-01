(function(window) {
    'use strict';

    let app = window.App;
    let Truck = App.Truck
    let DataStore = App.DataStore;

    let myTruck = new Truck('1234', new DataStore());

    window.myTruck = myTruck;
    
})(window);
