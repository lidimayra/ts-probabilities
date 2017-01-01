export function combination(a: number, b: number): number {
    return factorial(a) / factorial(a-b) * factorial(b);
}

export function factorial(x: number): number {
    var n: number = 1;
    for (var i = 2; i <= x; i++) {
        n *= i;
    }

    return n;
}
