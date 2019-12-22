function divideAsLongAsPossible(n, d) {
    while(true){
        if(n%d != 0) break;
        n/=d;
    }
    return n;
}


console.log(divideAsLongAsPossible(36,3)); //4