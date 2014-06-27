(function () {
    'use strict';

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.Log) {
        if (console != undefined && console.log != undefined) {
            console.log('alphabot.Engine.Log is already defined.');
        }

        return;
    }

    alphabot.Engine.Log = Class.extend({
        init: function (option) {
            this.frames = option.frames;
            this.currentIndex = 0;
        },

        next: function () {
            var self = this;
            var frameLength = self.frames;
            if (this.currentIndex + 1 < frameLength) {
                this.currentIndex++;
            }
        },

        prev: function () {
            var self = this;
            if (this.currentIndex - 1 > -1) {
                this.currentIndex--;
            }
        },

        reset: function () {
            var self = this;
            this.currentIndex = 0;
        }
    });
});