export class Uniform {
    private _a: number;
    private _b: number;

    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }

    mean(): number {
        return (this._a + this._b) / 2;
    }

    coefficientOfVariation(): number {
        return this.standardDeviation() / this.mean();
    }

    standardDeviation():number {
        return Math.sqrt(this.variance());
    }

    variance(): number {
        return Math.pow(this._b - this._a, 2)/12;
    }

    probabilityBetween(c: number, d: number): number {
        return (d - c)/(this._b - this._a);
    }

    probabilityLesserThanOrEqual(c: number): number {
        return (c - this._a) / (this._b - this._a);
    }

    probabilityGreaterThanOrEqual(c: number): number {
        return (this._b - c) / (this._b - this._a);
    }

}
