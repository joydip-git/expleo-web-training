(function () {
    function add(a, b) {
        return (a + b);
    }

    function subtract(a, b) {
        return (a - b);
    }
})();

define([], function (require, factory) {
    'use strict';
    function add(a, b) {
        return (a + b);
    }

    function subtract(a, b) {
        return (a - b);
    }
});

export function add(a, b) {
    return (a + b);
}

export function subtract(a, b) {
    return (a - b);
}

module.exports = {
    add: function (a, b) {
        return (a + b);
    },
    subtract: function (a, b) {
        return (a - b);
    }
}

