// callback: 나중에 실행하는 함수 
// 자바스크립트는 일급 객체 

// 비동기적으로 
// console.log(0);
// setTimeout(function(){
//     console.log('hello');
// }, 0);
// console.log(1);

// 동기적으로 (순차적으로)
function fakeSetTimeout(callback, delay){
    callback();
}

console.log(0);
fakeSetTimeout(function(){
    console.log('hello');
}, 0);
console.log(1);