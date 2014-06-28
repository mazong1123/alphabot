(function () {
    'use strict'

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.LogList) {
        if (console !== undefined && console.LogList !== undefined) {
            console.log('alphabot.Engine.LogList is already defined.');
        }

        return;
    }

    alphabot.Engine.LogList = alphabot.Infrastructure.List.extend({
        init: function (option) {
            this._super(option);
        }
    });
});