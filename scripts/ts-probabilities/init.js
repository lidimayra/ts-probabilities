define(["require", "exports", "./distribution"], function (require, exports, distribution) {
    "use strict";
    (function () {
        var dist = new distribution.Binomial(5, 3);
        console.log(dist.variance());
    })();
});
