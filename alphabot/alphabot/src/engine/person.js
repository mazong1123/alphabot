////////////
// depends on: 
//  version.js
//  class.js

(function () {
    'use strict';

    alphabot.Engine = alphabot.Engine || {};

    if (alphabot.Engine.Person) {
        if (console !== undefined && console.log !== undefined) {
            console.log('alphabot.Engine.Person is already defined.');
        }

        return;
    }

    alphabot.Engine.Person = Class.extend({
        init: function (option) {
            this.name = option.name;
            this.faceSetUrl = option.faceSetUrl;

            // The faces looks like:
            // [{x: 0, y: 0}, {x: 30, y: 0}]
            // faceset is actually a sprite image. faces inicates the position of each face on the sprite.
            this.faces = option.faces;
            this.currentFace = 0;
        },

        setFace: function (faceIndex) {
            var self = this;
            self.currentFace = faceIndex;
        },

        getCurrentFace: function () {
            var self = this;

            return self.currentFace;
        }
    });
})();