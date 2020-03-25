function missingNumber(arr) {
    arr.sort((a,b) => b-a);
    let index = 0;
    for(let i=arr.length; i >= 0; i--){
        if(arr[index++] !== i ) return i;
    }
}


console.log(missingNumber([3, 1, 0])); // 2