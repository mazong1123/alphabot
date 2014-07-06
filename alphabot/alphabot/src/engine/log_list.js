(function () {
    'use strict'

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.LogList) {
        if (console !== undefined && console.log !== undefined) {
            console.log('alphabot.Engine.LogList is already defined.');
        }

        return;
    }

    alphabot.Engine.LogList = alphabot.Infrastructure.List.extend({
        init: function (option) {
            this._super(option);
            this.title = option.title;

            for (var i = 0; i < option.logs.length; i++) {
                var logData = option.logs[i];
                var log = new alphabot.Engine.Log(logData);
                this.items.push(log);
            }
        },

        getTitle: function () {
            var self = this;

            return self.title;
        },

        setTitle: function (newTitle) {
            var self = this;
            self.title = newTitle;
        }
    });
})();