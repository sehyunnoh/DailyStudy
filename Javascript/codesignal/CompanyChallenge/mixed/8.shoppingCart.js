function shoppingCart(requests) {
  let arr = requests.map((x) => x.split(" : "));
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "checkout") {
      result = {};
      continue;
    }
    let key = arr[i][1];
    let cnt = result[key] || 0;
    switch (arr[i][0]) {
      case "add":
        result[key] = cnt + 1;
        break;
      case "remove":
        delete result[key]
        break;
      case "quantity_upd":
        result[key] = cnt + +arr[i][2];
        break;
    }
  }
  let arrResult = [];
  for (let [key, value] of Object.entries(result)) {
    arrResult.push(`${key} : ${value}`);
  }
  return arrResult;
}

// console.log(
//   shoppingCart([
//     "add : milk",
//     "add : pickles",
//     "remove : milk",
//     "add : milk",
//     "quantity_upd : pickles : +4",
//   ])
// );
// ["pickles : 5",
//  "milk : 1"]

console.log(
  shoppingCart([
    "add : milk",
    "add : pickles",
    "add : fruitz",
    "add : vegetables",
    "add : computer",
    "add : whattheawesomeshopisit",
    "quantity_upd : computer : +2",
    "remove : computer",
    "remove : milk",
    "add : computer",
    "quantity_upd : fruitz : +100",
    "add : computer mouse",
    "add : computer monitor",
    "quantity_upd : computer mouse : +3",
    "quantity_upd : computer mouse : +5",
    "quantity_upd : computer : +3",
    "quantity_upd : fruitz : -50",
    "add : fruitz seed",
  ])
);
