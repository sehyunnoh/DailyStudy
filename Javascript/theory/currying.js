// let add = (a,b) => a+b;
// console.log(add(1,2));

// let add = (a) => (b) => a + b;
// console.log(add(1)(2));
// function add(a){ return function(b){return a+b}};

// let add1 = add(1);
// console.log(add1);
// console.log(add1.toString());

// let test = add();
// console.log(test.toString()) // toString 으로 함수 내용 볼수 있음.




// let add = (a,b) => a+b;

let addCurry = (a) => (b) => a+b; 
let add1 = addCurry(1);
console.log(add1(5));
