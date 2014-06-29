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

        //////////////////////////////////
        // Parse Alpha Expression.
        parse: function (logListData) {
            var logListJson = null;
            if (typeof logListData === 'string') {
                logListJson = $.parseJSON(logListData);
            }
            else {
                logListJson = logListData;
            }

            var option = {
                title: logListJson.title
            };

            var logList = new alphabot.Engine.LogList(option);
            
            return logList;
        }
    });
})();