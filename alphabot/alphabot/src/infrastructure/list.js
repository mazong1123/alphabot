﻿(function () {
    'use strict'

    alphabot.Infrastructure = alphabot.Infrastructure || {};

    if (alphabot.Infrastructure.List) {
        if (console !== undefined && console.LogList !== undefined) {
            console.log('alphabot.Infrastructure.List is already defined.');
        }

        return;
    }

    alphabot.Infrastructure.List = Class.Extend({
        init: function (option) {
            this.items = option.items;
            this.currentIndex = 0;
        },

        next: function () {
            var self = this;
            var itemLength = self.items;
            if (this.currentIndex + 1 < itemLength) {
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