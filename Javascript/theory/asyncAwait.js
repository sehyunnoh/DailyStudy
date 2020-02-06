function delayP(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date().toISOString());
      }, sec * 1000);
    });
  }

function myFunc(){
    return 'func';
}

async function myAsync(){
    const time = await delayP(1);
    console.log(time);
    return 'async';
}

// console.log(myFunc());
// console.log(myAsync());

myAsync().then((result) => {
    console.log(result);
})