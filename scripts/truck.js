(function (window) {
    'use strict';

    let App = window.App || {};

    function Truck (truckID, db) {
        this.truckID = truckID;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for' + order.emailAdress);
        this.db.add(order.emailAdress, order);
    }
    
    App.Truck = Truck;
    window.App = App; 

})(window);