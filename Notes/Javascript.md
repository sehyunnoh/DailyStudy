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