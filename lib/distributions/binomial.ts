import { factorial, combination } from '../precalculus';

export class Binomial {
    private _numberOfTrials: number;
    private _p: number;

    constructor(numberOfTrials: number, p: number) {
        this._numberOfTrials = numberOfTrials;
        this._p = p;
    }

    numberOfTrials(): number {
        return this._numberOfTrials;
    }

    mean(): number {
        return this._numberOfTrials * this._p
    }

    probabilityOfFailure(): number {
        return 1 - this._p;
    }

    variance(): number {
        var success: number = this._p;
        var failure: number = this.probabilityOfFailure();
        return this._numberOfTrials * success * failure;
    }

    standardDeviation(): number {
        return Math.sqrt(this.variance());
    }

    coefficientOfVariation(): number {
        return this.standardDeviation() / this.mean();
    }

    probabilityOf(x: number): number {
        var n = this._numberOfTrials;
        var p = this._p;
        var q = this.probabilityOfFailure();

        return combination(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
    }
}
