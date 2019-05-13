////////////////////////////////////////////
// let
// var topic = "자바스크립트";

// if(topic){
//     let topic = "리액트";
//     console.log('블록', topic);
// }

// console.log('글로벌',topic);

////////////////////////////////////////////
// const 
// const pizza = true;
// pizza = false;

// console.log(pizza);

////////////////////////////////////////////
// Template Literals
// var student = {
//     name: 'John Kagga',
//     city: 'Kamplala'
// }

// let message = `hello ${student.name} from ${student.city}`;
// console.log(message);

////////////////////////////////////////////
// Default Parameter
// function greet(name = 'Fellow', greeting = 'Welcome'){
//     return `${greeting} ${name}`;
// }

// console.log(greet());
// console.log(greet('Elise'));
// console.log(greet('Mike','Hi'));

////////////////////////////////////////////
// Arrow Function
// name => name.toUpperCase();

// const hello = () => console.log('hello react!');

// const location = (name, city) => console.log(`${name} is from ${city}.`);

////////////////////////////////////////////
// Destructuring, Destructuring Assignment

// const points = [20, 30, 40];

// const [x,y,z] = points;
// console.log(x,y,z);

// const[x, ,z] = points;
// console.log(x, z);

// const car = {
//     type: 'Toyota',
//     color: 'Silver',
//     model: '2007'
// }

// const {type, color, model} = car;
// console.log(type, color, model);

////////////////////////////////////////////
// Enhanced Object Literal
// const type = 'Toyota'
// const color = 'Silver'
// const print = function(){
//     console.log(`${this.type}의 ${this.color}는 2007년식 모델이다.`);
// }

// let myCar = {type, color, print};
// myCar.print();

// let skier = {
//     name,
//     sound, 
//     powderYell() {
//         let yell = this.sound.toUpperCase();
//         console.log(`${yell} ${yell} ${yell} !!!`);
//     }
//     speed(mph){
//         this.speed = mph;
//         console.log(`속력(mph):`,mph);
//     }
// }

////////////////////////////////////////////
// Spread Operator
// 반복가능한 객체를 확장(열거)하기
// const cities = ["Kampala","Nairobi","Lagos"];
// console.log(...cities);

// 여러 배열을 조합하기
// const east = ["Uganda","Kenya","Tangania"];
// const west = ["Nigeria","Cameroon","Ghana"];

// const countries = [...east, ...west];
// console.log(countries);
// console.log(...countries);

// 배열 조작하기 (나머지 연산으로 사용하기)
// let lakes = ["경포호","화진포","송지호","청초호"];
// let [ first, ...rest] = lakes;
// console.log(rest.join(", "));

// 배열 조작하기 (함수의 인자를 배열로 모으기)
// function multiply(multiplier, ...theArgs){
//     return theArgs.map((element) => multiplier * element);
// }

// let arr = multiply(2,1,2,3);
// console.log(arr);

////////////////////////////////////////////
// Promise

////////////////////////////////////////////
// fetch

////////////////////////////////////////////
// Class

////////////////////////////////////////////
// Module
