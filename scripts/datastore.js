(function (window) {
    'use strict' ;


let App = window.App || {};

function DataStore() {
    console. log('Running the DatStore Function...')
}

App.DataStore = DataStore;
window.App = App;
})(window);