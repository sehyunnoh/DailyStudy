// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error");
//     }, sec * 1000);
//   });
// }

// wait(1).catch(e=>{
//     console.log('1st catch', e);
//     throw e;
// }).catch(e=>{
//     console.log('2nd catch', e);
// })

// wait(1).then(
//   () => {
//     console.log("dong");
//   },
//   e => {
//     console.log("1st catch in then", e);
//   }
// );

///////////////////////////////////////////////////

// async function myAsyncFun(){
    //     throw 'myAsyncError';
    //     // return 'done';
    // }
    
    // function myPromiseFun(){
        //     return new Promise((resolve, reject) => {
            //         reject('myError');
            //     })
            // }
            
            // const result = myAsyncFun().catch(e => {
                //     console.error(e);
                // });
                // // console.log(result);
                
                // const result2 = myPromiseFun().catch(e => {
                    //     console.error(e);
                    // });
                    // // console.log(result2);
                    
////////////////////////////////////////////////

function wait(sec){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // resolve('done');
            reject('wait Error');
            // console.log('done');
        }, sec * 1000);
    })
}

// async function myAsyncFun(){
//     console.log(new Date());
//     try{
//         await wait(3);
//     }catch(e){
//         console.error(e);
//     }
//     console.log(new Date());
// }

async function myAsyncFun(){
    console.log(new Date());
    await wait(3).catch(e => { console.error(e)});
    console.log(new Date());
}

const result = myAsyncFun();