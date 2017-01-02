export class Exponential {
    private _variance: number;

    constructor(variance: number) {
        this._variance = variance;
    }

    standardDeviation(): number {
        return Math.sqrt(this._variance);
    }

    probabilityBetween(a: number, b: number) {
        var gteqA: number = this.probabilityGreaterThanOrEqual(a);
        var gteqB: number = this.probabilityGreaterThanOrEqual(b);
        return gteqA - gteqB;
    }

    probabilityLesserThanOrEqual(a: number) {
        return 1 - this.probabilityGreaterThanOrEqual(a);
    }

    probabilityGreaterThanOrEqual(a: number) {
        return Math.pow(Math.E, (this._lambda() * (-1) * a));
    }

    private _lambda(): number {
        return 1 / this.standardDeviation();
    }
}
