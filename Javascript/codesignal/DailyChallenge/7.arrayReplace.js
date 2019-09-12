function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    result = [];
    inputArray.forEach(function(a){
        if(a == elemToReplace){
            result.push(substitutionElem);
        }else{
            result.push(a);
        }
    })

    return result;
}


console.log(arrayReplace([1, 2, 1],1,3));