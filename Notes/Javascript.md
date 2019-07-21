```js
var i =5;
while(i--){
    console.log(i);
}
```

# Javascript 에서 form 호출
```js
$("form").submit();
```

```js
isNaN(bet)
```
# callback 함수
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

# const 는 초기화 를 해줘야 선언 됨. 
# ` -> grave accent , ~ -> tilt 

## prototype
> __proto__ => dunder proto 라고 함.
> instance를 생성하면 prototype을 공유 함. 
```js
function Human(){};

var person1 = new Human();
var person2 = new Human();
```
# prototype 은 instance가 아니라 상위 객체에수 추가 할수 있음.
```js
Human.prototype.name = 'test';
```

## 비구조화 할당 문법의 활용
```js
const object = {
	foo: 1,
	bar: 2
}

function print({foo, bar}){
	console.log(foo, bar);
}

print(object);
```

# array에서 index 값만 빼기
> 1. filter 활용
> ```js
>  var array = [1,2,3,4,5];
>  var value = 3;
>  array.filter(i => i != value);
> ```
> 2. splice 활용
> ```js
> var index = 3;
> array.splice(index, 1);> 
> ``` 
> 3. spread operator 활용
> ```js
>   var index = gums.indexOf(array[tmp]);
>   if( index != -1) {
>      gums = [...gums.slice(0, index), ...gums.slice(index + 1, gums.length)];
>  }
>