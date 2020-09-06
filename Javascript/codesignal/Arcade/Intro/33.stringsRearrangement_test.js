function stringsRearrangement(input) {
  let array = input;

  for (let i = 0; i < array.length; i++) {
    let varified = 1;
    for (let j = 0; j < array[i].length - 1; j++) {
      if (!check(array[i][j], array[i][j + 1])) {
        varified = 0;
        break;
      }
    }
    if (varified == 1) return true;
  }
  return false;
}

function check(arr1, arr2) {
  let a1 = arr1.split("");
  let a2 = arr2.split("");
  let num = 0;

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) num++;
  }

  return num === 1 ? true : false;
}

var permute = function (nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index !== i);
    set.push(nums[i]);
    permute(newNums, set, answers);
    set.pop();
  }

  return answers;
};

console.log(stringsRearrangement(["q", "q"])); // true
