(function () {
    'use strict'

    alphabot.UI = alphabot.UI || {};

    if (alphabot.UI.LogPlayer) {
        if (console !== undefined && console.LogPlayer !== undefined) {
            console.log('alphabot.UI.LogPlayer is already defined.');
        }

        return;
    }

    alphabot.UI.LogPlayer = Class.Extend({
        init: function (option) {
            this.element = $(option.selector);
            this.data = option.data;
            this.bot = new alphabot.Engine.Bot();
            this.logList = bot.parse(this.data);
        },

        initialize: function () {
            // Load all needed resources, configure all settings.
        }
    });
})();