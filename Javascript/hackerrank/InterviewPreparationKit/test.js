function test (a,b){
    a.sort(function(a,b){return a-b});
    let result = 0;
    for(let i=0; i<a.length-1; i++)    {
        for(let j=i+1; j<a.length;j++){
            if(a[j] - a[i] == b){
                result++;
                break;
            }
        }
    }
    return result;
}

// console.log(test([1, 5, 3, 4, 2], 3));
console.log(test([8, 12, 16, 4, 0, 20], 4));
