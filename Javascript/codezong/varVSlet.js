// var 은 함수 단위(scope)
// let 은 중괄호 단위

// function x() {
//   {
//     var t = 1;
//   }
//   console.log(t);
// }

function x() {
  {
    let t = 1;
  }
  console.log(t);
}



x();
