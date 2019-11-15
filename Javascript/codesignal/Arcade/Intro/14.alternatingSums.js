function alternatingSums(a) {
    let first = 0, second = 0;
    for(let i=0; i < a.length; i++){
        if(i%2 == 0){
            first+=a[i];
        }else{
            second+=a[i];
        }
    }
    let result = [first, second];
    return result;
}


console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]