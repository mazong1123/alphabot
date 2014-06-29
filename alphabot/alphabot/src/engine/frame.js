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
            this.leftPerson = option.leftPerson;
            this.rightPerson = option.rightPerson;
        }
    });
})();