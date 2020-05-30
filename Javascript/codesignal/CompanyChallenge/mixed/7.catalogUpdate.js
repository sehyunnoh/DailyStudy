function catalogUpdate(catalog, updates) {
  let obj = {};
  for (let i = 0; i < catalog.length; i++) {
    const key = catalog[i].shift();
    obj[key] = catalog[i];
  }
  for (let i = 0; i < updates.length; i++) {
    const key = updates[i].shift();
    if (key in obj) {
      const tmpArr = [...obj[key], ...updates[i]];
      obj[key] = tmpArr.sort();
    } else {
      obj[key] = updates[i];
    }
  }
  let sorted = Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),{}
    );
  let result = [];
  for (let [key, value] of Object.entries(sorted)) {
    result.push([key, ...value]);
  }
  return result;
}

console.log(
  catalogUpdate(
    [
      ["Books", "Classics", "Fiction"],
      ["Electronics", "Cell Phones", "Computers", "Ultimate item"],
      ["Grocery", "Beverages", "Snacks"],
      ["Snacks", "Chocolate", "Sweets"],
      ["root", "Books", "Electronics", "Grocery"],
    ],
    [
      ["Snacks", "Marmalade"],
      ["Fiction", "Harry Potter"],
      ["root", "T-shirts"],
      ["T-shirts", "CodeSignal"],
    ]
  )
);
