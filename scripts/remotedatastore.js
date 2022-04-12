(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function RemoteDataStore(url) {
        if(!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        //call jQuery's $.post method to send the value to the serverUrl
        // when the server responds, call an anonymous function with serverResponse
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    RemoteDataStore.prototype.getAll = function () {
        // mage a "get" call to the surver URL
        // pass in an anonymouse function that does something with the data
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
        });
    }
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
