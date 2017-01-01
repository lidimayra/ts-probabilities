export class Poisson {
    private _mean: number;

    constructor(mean: number) {
        this._mean = mean;
    }

    standardDeviation(): number {
        return Math.sqrt(this._mean);
    }

    coefficientOfVariation(): number {
        return this.standardDeviation() / this._mean;
    }

    probabilityOf(x: number): number {
        return Math.pow(this._mean, x) * Math.pow(Math.E, this._mean*(-1)) / this._factorial(x);
    }

    private _factorial(x: number): number {
        var n: number = 1;
        for (var i = 2; i <= x; i++) {
            n *= i;
        }

        return n;
    }
}
