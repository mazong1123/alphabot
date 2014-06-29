(function () {
    'use strict';

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.Bot) {
        if (console !== undefined && console.log !== undefined) {
            console.log('alphabot.Engine.Bot is already defined.');
        }

        return;
    }

    alphabot.Engine.Bot = Class.extend({
        init: function (option) {
        },

        parse: function (logListData) {
            // TODO: Parse Alpaha Expression here.
            var option = {
                title: 'Test log list.'
            };
            var logList = new alphabot.Engine.LogList(option);
            
            return logList;
        }
    });
})();