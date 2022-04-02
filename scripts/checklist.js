(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector:' + selector);
        }

        //remove a row identified by an email address
        CheckList.prototype.removeRow = function (email) {
            this.$element
               .find('[value="' + email + '"]')    
               .closest('[data-coffee-order="checkbox"]')
               .remove();     
        };

        // The method that adds a new row to the checklist
        CheckList.prototype.addRow = function (coffeeOrder) {
            //Remove any existing rows that match the email address
            this.removeRow(coffeeOrder.emailAddress);
            //Create a new instance of a row, using the coffee order info
            var rowElement = new Row(coffeeOrder);
            // Add the new ro instance's $element property to the checklist
            this.$element.append(rowElement.$element);
        };

        //Each row is one outstanding order
        function Row(coffeeOrder) {
            let $div = $('<div></div>', {
                'data-coffee-order': 'checkbox',
                'class': 'checkbox'
            });
            let $label = $('<label></label>');

            let $checkbox = $('<input></input>', {
                type: 'checkbox',
                value: coffeeOrder.emailAddress
            });
        }
    }

    let description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
        description += coffeeOrder.flavor + ' ';
    
    description += coffeeOrder.coffee + ', '
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += '[ ' + coffeeOrder.strength + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
    }

    App.CheckList = CheckList;
    window.App = App;
})(window);