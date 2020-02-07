function electionsWinners(v, k) {
    v.sort((a,b) => b-a);

    let result = 0;

    if( k === 0){
        if(v[0] === v[1]){
            result = 0;
        }else{
            result = 1;
        }
    }else{
        for(let i=0; i< v.length; i++){
            if((v[i] + k) > v[0]) result++;
        }
    }
    return result;

}

console.log(electionsWinners([2, 3, 5, 2], 3)) // 2