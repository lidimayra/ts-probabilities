define(["require", "exports"], function (require, exports) {
    "use strict";
    var Uniform = (function () {
        function Uniform(a, b) {
            this._a = a;
            this._b = b;
        }
        Uniform.prototype.mean = function () {
            return (this._a + this._b) / 2;
        };
        Uniform.prototype.coefficientOfVariation = function () {
            return this.standardDeviation() / this.mean();
        };
        Uniform.prototype.standardDeviation = function () {
            return Math.sqrt(this.variance());
        };
        Uniform.prototype.variance = function () {
            return Math.pow(this._b - this._a, 2) / 12;
        };
        Uniform.prototype.probabilityBetween = function (c, d) {
            return (d - c) / (this._b - this._a);
        };
        Uniform.prototype.probabilityLesserThanOrEqual = function (c) {
            return (c - this._a) / (this._b - this._a);
        };
        Uniform.prototype.probabilityGreaterThanOrEqual = function (c) {
            return (this._b - c) / (this._b - this._a);
        };
        return Uniform;
    }());
    exports.Uniform = Uniform;
});
