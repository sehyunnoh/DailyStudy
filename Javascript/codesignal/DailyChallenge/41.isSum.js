function isSum(value) {
    let result = 0;
    let num = 0;
    while (result < value){
        result+=num++;
    }
    return (result == value)? true: false;
}


console.log(isSum(45)); //true;