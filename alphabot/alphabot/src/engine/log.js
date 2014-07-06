(function () {
    'use strict';

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.Log) {
        if (console !== undefined && console.log !== undefined) {
            console.log('alphabot.Engine.Log is already defined.');
        }

        return;
    }

    alphabot.Engine.Log = alphabot.Infrastructure.List.extend({
        init: function (option) {
            this._super(option);

            for (var i = 0; i < option.frames.length; i++) {
                var frameData = option.frames[i];
                var frame = new alphabot.Engine.Frame(frameData);
                this.items.push(frame);
            }
        }
    });
})();