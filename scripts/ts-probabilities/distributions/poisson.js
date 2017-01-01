define(["require", "exports"], function (require, exports) {
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
            return Math.pow(this._mean, x) * Math.pow(Math.E, this._mean * (-1)) / this._factorial(x);
        };
        Poisson.prototype._factorial = function (x) {
            var n = 1;
            for (var i = 2; i <= x; i++) {
                n *= i;
            }
            return n;
        };
        return Poisson;
    }());
    exports.Poisson = Poisson;
});
