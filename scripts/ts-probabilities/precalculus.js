define(["require", "exports"], function (require, exports) {
    "use strict";
    function combination(a, b) {
        return factorial(a) / factorial(a - b) * factorial(b);
    }
    exports.combination = combination;
    function factorial(x) {
        var n = 1;
        for (var i = 2; i <= x; i++) {
            n *= i;
        }
        return n;
    }
    exports.factorial = factorial;
});
