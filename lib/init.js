/*
    Imported modules must be declared here

    Example:
    import { Exponential } from './distributions/exponential';
*/
define(["require", "exports", "./distributions/binomial"], function (require, exports, binomial_1) {
    "use strict";
    (function () {
        /*
            Code inserted here is loaded after main script
    
            Example:
            var dist = new Exponential(25);
            console.log(dist.standardDeviation());
        */
        var dist = new binomial_1.Binomial(5, 3);
        console.log(dist.standardDeviation());
    })();
});
