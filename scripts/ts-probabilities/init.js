define(["require", "exports", "./distributions/binomial"], function (require, exports, binomial_1) {
    "use strict";
    (function () {
        var dist = new binomial_1.Binomial(5, 3);
        console.log(dist.standardDeviation());
    })();
});
