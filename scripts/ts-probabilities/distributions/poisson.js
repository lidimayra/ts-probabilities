define(["require", "exports", "../precalculus"], function (require, exports, precalculus_1) {
    "use strict";
    var Poisson = (function () {
        function Poisson(mean) {
            this._mean = mean;
        }
        Poisson.prototype.standardDeviation = function () {
            return Math.sqrt(this._mean);
        };
        Poisson.prototype.coefficientOfVariation = function () {
            return this.standardDeviation() / this._mean;
        };
        Poisson.prototype.probabilityOf = function (x) {
            return Math.pow(this._mean, x) * Math.pow(Math.E, this._mean * (-1)) / precalculus_1.factorial(x);
        };
        return Poisson;
    }());
    exports.Poisson = Poisson;
});
