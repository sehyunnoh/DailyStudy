```js
var i =5;
while(i--){
    console.log(i);
}
```

> Javascript 에서 form 호출
```js
$("form").submit();
```

```js
isNaN(bet)
```
> callback 함수
```js
function test(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isCheck(num) {
  return num > 3;
}

var array = [1, 3, 5, 7, 9];

test(array, isCheck);
```

> const 는 초기화 를 해줘야 선언 됨. 
> ` -> grave accent , ~ -> tilt 

## prototype
> __proto__ => dunder proto 라고 함.
> instance를 생성하면 prototype을 공유 함. 
```js
function Human(){};

var person1 = new Human();
var person2 = new Human();
```
> prototype 은 instance가 아니라 상위 객체에수 추가 할수 있음.
```js
Human.prototype.name = 'test';
```