define(["require", "exports", "../precalculus"], function (require, exports, precalculus_1) {
    "use strict";
    var Binomial = (function () {
        function Binomial(numberOfTrials, mean) {
            this._numberOfTrials = numberOfTrials;
            this._mean = mean;
        }
        Binomial.prototype.numberOfTrials = function () {
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
            return precalculus_1.combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
        };
        return Binomial;
    }());
    exports.Binomial = Binomial;
});
