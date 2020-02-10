function sumUpNumbers(input) {
    return +(input.replace(/[^0-9]/g, ' ').split(' ').reduce((a,b)=>+a + +b));
}

console.log(sumUpNumbers("2 apples, 12 oranges")); // 14
console.log(sumUpNumbers("123450")); // 123450
console.log(sumUpNumbers("Your payment method is invalid")); // 0
console.log(sumUpNumbers("there are some (12) digits 5566 in this 770 string 239")); // 6587
