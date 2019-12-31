var kim = {name: 'kim', first:10, second: 20};
var lee = {name: 'lee', first:10, second: 10};

function sum(prefix){
    return prefix + (this.first + this.second);
}

sum.call(kim); // 모든 함수는 call을 갖고 있음.
console.log(sum.call(kim, '=> '));
console.log(sum.call(lee, ': '));

var kimSum = sum.bind(kim, '-> ');
console.log(kimSum());