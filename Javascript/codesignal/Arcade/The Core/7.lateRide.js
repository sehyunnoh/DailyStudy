function lateRide(n) {
    let first = (''+(Math.floor(n/60))).split('');
    let second = (''+(n%60)).split('');
    let array = [...first, ...second];
    return array.reduce((a,b)=>Number(a)+Number(b))
}

// console.log(lateRide(240)) // 4
console.log(lateRide(808)) // 14