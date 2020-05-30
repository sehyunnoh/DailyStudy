function launchSequenceChecker(sys, step) {
  let obj = {};
  for (let i = 0; i < sys.length; i++) {
    if (sys[i] in obj) {
      if (obj[sys[i]] >= step[i]) {
        return false;
      } else {
        obj[sys[i]] = step[i];
      }
    } else {
      obj[sys[i]] = step[i];
    }
  }
  return true;
}

// console.log(
//   launchSequenceChecker(
//     ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
//     [1, 10, 11, 2, 12, 111]
//   )
// ); // true

console.log(
  launchSequenceChecker(
    ["Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9", "Falcon 9"],
    [1, 3, 5, 7, 7, 9]
  )
); //false
