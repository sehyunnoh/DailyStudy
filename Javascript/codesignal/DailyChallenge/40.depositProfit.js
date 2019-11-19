function depositProfit(deposit, rate, threshold) {
    let result = 0;
    while(deposit < threshold){
        deposit*=(1+rate/100);
        result++;
    }
    return result;
}

console.log(depositProfit(100, 20, 170)); // 3