////////////
// depends on: 
//  version.js
//  class.js
//  engine/player.js

(function () {
    'use strict';

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.Frame) {
        if (console !== undefined && console.log !== undefined) {
            console.log('alphabot.Engine.Frame is already defined.');
        }

        return;
    }

    alphabot.Engine.Frame = Class.extend({
        init: function (option) {
            this.text = option.text;
            this.direction = option.direction;

            if (option.left !== undefined) {
                this.leftPerson = new alphabot.Engine.Person(option.left);
            }

            if (option.right !== undefined) {
                this.rightPerson = new alphabot.Engine.Person(option.right);
            }
        },

        getText: function () {
            var self = this;

            return self.text;
        },

        getDirection: function () {
            var self = this;

            return self.direction;
        },

        getLeftPerson: function () {
            var self = this;

            return self.leftPerson;
        }
    });
})();