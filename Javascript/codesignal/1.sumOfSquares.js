// Find the sum of squares of all integers from 1 up to and including given N.

function sumOfSquares(n) {
    var result = n*n;
    while(n-->0)result+=(n*n)
    return result;
}

// sumOfSquares = n => 0 | n ** 2.5
// sumOfSquares = n => n * (n + ++n) * n / 6
// sumOfSquares = n => n*~n*~(2*n)/6
// sumOfSquares = n => n*(n+++n)*n/6

console.log(sumOfSquares(5));