function delay(sec, callback){
    setTimeout(()=>{
        callback(new Date().toISOString());
    }, sec * 1000);
};

console.log('start', new Date().toISOString());

delay(1, (result) => {
    console.log(result);
    
    delay(1, (result) => {
        console.log(result);

        delay(1, (result) => {
            console.log(result);
        })
    })

    

})





console.log('hello');