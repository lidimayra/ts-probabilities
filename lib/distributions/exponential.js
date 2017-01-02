define(["require", "exports"], function (require, exports) {
    "use strict";
    var Exponential = (function () {
        function Exponential(variance) {
            this._variance = variance;
        }
        Exponential.prototype.standardDeviation = function () {
            return Math.sqrt(this._variance);
        };
        Exponential.prototype.probabilityBetween = function (a, b) {
            var gteqA = this.probabilityGreaterThanOrEqual(a);
            var gteqB = this.probabilityGreaterThanOrEqual(b);
            return gteqA - gteqB;
        };
        Exponential.prototype.probabilityLesserThanOrEqual = function (a) {
            return 1 - this.probabilityGreaterThanOrEqual(a);
        };
        Exponential.prototype.probabilityGreaterThanOrEqual = function (a) {
            return Math.pow(Math.E, (this._lambda() * (-1) * a));
        };
        Exponential.prototype._lambda = function () {
            return 1 / this.standardDeviation();
        };
        return Exponential;
    }());
    exports.Exponential = Exponential;
});
