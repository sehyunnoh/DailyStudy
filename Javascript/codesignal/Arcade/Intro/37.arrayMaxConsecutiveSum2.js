function arrayMaxConsecutiveSum(input, k) {
    let max = 0;
    let tmp = 0;
    while(tmp < k){
        max+=input[tmp++];
    }
    let current=max;
    let front = k-1;
    let back = 0;
    while(front < input.length){
        current+=input[++front];
        current-=input[back++];
        max = (max < current)? current:max;
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2)) //8
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4],3)) //9
