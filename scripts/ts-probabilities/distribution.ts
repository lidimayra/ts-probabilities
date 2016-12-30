export class Binomial {
    private _numberOfTrials: number;
    private _mean: number;

    constructor(numberOfTrials: number, mean: number) {
        this._numberOfTrials = numberOfTrials;
        this._mean = mean;
    }

    get numberOfTrials(): number {
        return this.numberOfTrials;
    }

    probabilityOfSuccess(): number {
        return this._mean / this._numberOfTrials;
    }

    probabilityOfFailure(): number {
        return 1 - this.probabilityOfSuccess();
    }

    variance(): number {
        var success: number = this.probabilityOfSuccess();
        var failure: number = this.probabilityOfFailure();
        return this._numberOfTrials * success * failure;
    }

    standardDeviation(): number {
        return Math.sqrt(this.variance());
    }

    coefficientOfVariation(): number {
        return this.standardDeviation() / this._mean;
    }

    probabilityOf(x: number): number {
        var n = this.numberOfTrials;
        var p = this.probabilityOfSuccess();
        var q = this.probabilityOfFailure();

        return this._combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
    }

    private _combination(a: number, b: number): number {
        return this._factorial(a) / this._factorial(a-b) * this._factorial(b);
    }

    private _factorial(x: number): number {
        var n: number = 1;
        for (var i = 2; i <= x; i++) {
            n *= i;
        }

        return n;
    }

}
