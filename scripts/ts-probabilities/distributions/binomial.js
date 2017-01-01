define(["require", "exports"], function (require, exports) {
    "use strict";
    var Binomial = (function () {
        function Binomial(numberOfTrials, mean) {
            this._numberOfTrials = numberOfTrials;
            this._mean = mean;
        }
        Binomial.prototype.NumberOfTrials = function () {
            return this._numberOfTrials;
        };
        Binomial.prototype.probabilityOfSuccess = function () {
            return this._mean / this._numberOfTrials;
        };
        Binomial.prototype.probabilityOfFailure = function () {
            return 1 - this.probabilityOfSuccess();
        };
        Binomial.prototype.variance = function () {
            var success = this.probabilityOfSuccess();
            var failure = this.probabilityOfFailure();
            return this._numberOfTrials * success * failure;
        };
        Binomial.prototype.standardDeviation = function () {
            return Math.sqrt(this.variance());
        };
        Binomial.prototype.coefficientOfVariation = function () {
            return this.standardDeviation() / this._mean;
        };
        Binomial.prototype.probabilityOf = function (x) {
            var n = this._numberOfTrials;
            var p = this.probabilityOfSuccess();
            var q = this.probabilityOfFailure();
            return this._combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
        };
        Binomial.prototype._combination = function (a, b) {
            return this._factorial(a) / this._factorial(a - b) * this._factorial(b);
        };
        Binomial.prototype._factorial = function (x) {
            var n = 1;
            for (var i = 2; i <= x; i++) {
                n *= i;
            }
            return n;
        };
        return Binomial;
    }());
    exports.Binomial = Binomial;
});
