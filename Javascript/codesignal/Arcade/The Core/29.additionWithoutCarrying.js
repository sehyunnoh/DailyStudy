function additionWithoutCarrying(p1, p2) {
    let a1 = (''+p1).split('').reverse();
    let a2 = (''+p2).split('').reverse();
 
    let len = (a1.length > a2.length)?a1.length:a2.length;

    let result = [];
    for(let i=0; i<len; i++){
        result.push(((+a1[i] || 0) + (+a2[i] || 0))%10);
    }
    return +result.reverse().join('');

}


console.log(additionWithoutCarrying(456, 1734)); //1180