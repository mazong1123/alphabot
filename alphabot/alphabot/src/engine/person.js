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
            this.faceSet = option.faceSet;

            // The faces looks like:
            // [{x: 0, y: 0}, {x: 30, y: 0}]
            // faceset is actually a sprite image. faces inicates the position of each face on the sprite.
            this.faces = option.faces;

            if (option.faceIndex !== undefined) {
                this.currentFaceIndex = option.faceIndex;
            }
            else {
                this.currentFaceIndex = 0;
            }
        },

        setCurrentFace: function (faceIndex) {
            var self = this;
            self.currentFaceIndex = faceIndex;
        },

        getCurrentFace: function () {
            var self = this;
            var currentFace = self.faces[self.currentFaceIndex];

            return currentFace;
        },

        getFace: function (faceIndex) {
            var self = this;
            var f = self.faces[faceIndex];

            return f;
        },

        getName: function () {
            var self = this;

            return self.name;
        },

        getFaceSet: function () {
            var self = this;

            return self.faceSet;
        },

        getFaces: function () {
            var self = this;

            return self.faces;
        }
    });
})();