function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

// delay(1, e => {
//   console.log(1, e);

//   delay(1, e => {
//     console.log(2, e);

//     delay(1, e => {
//       console.log(3, e);
//     });
//   });
// });

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1)
  .then(result => {
    console.log(1, result);
    return delayP(1);
  })
  .then(result => {
    console.log(2, result);
  });
