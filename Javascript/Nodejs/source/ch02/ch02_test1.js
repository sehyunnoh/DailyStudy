var result = 0;

console.time('duration_sum');

for(var i=0; i<= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1 to 1000 : %d', result);
console.log("현재 실행한 파일의 이름 : %s", __filename);
console.log("현재 실행한 파일의 패스 : %s", __dirname);

var Person = {name: '소녀시대', age: 20};
console.dir(Person);