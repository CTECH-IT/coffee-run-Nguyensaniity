(function (window) {
    'use strict';

    let App = window.App || {};

    function Truck (truckID, db) {
        this.truckID = truckID;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAdress, order);
    }

    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    }

    App.Truck = Truck;
    window.App = App; 

})(window);