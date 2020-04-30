const test = async (time) => {

    const result = await setTimeout(()=>{time}, time);
    return result;
}

console.log('시작전')
console.log(test(2000));
const result = test(1000);
console.log(result);
console.log('종료');
