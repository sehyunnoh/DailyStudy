function extractEachKth(input, k) {

    let tmp = k;
    let result = [];
    for(let i=0; i<input.length; i++){
        tmp--;
        if(tmp!==0){
            result.push(input[i]);
        }else{
            tmp = k;
        }
    }
    return result;
  
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); //[1, 2, 4, 5, 7, 8, 10]
console.log(extractEachKth([1, 1, 1, 1, 1], 1)); //[]
console.log(extractEachKth([2, 4, 6, 8, 10], 2)); //[2, 6, 10]
