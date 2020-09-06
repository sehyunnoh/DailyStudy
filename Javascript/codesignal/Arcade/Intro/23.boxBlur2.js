function boxBlur(image) {
    let w = image[0].length-2;
    let h = image.length-2;
    let result = Array(h).fill().map(x => Array(w).fill());
    for(let i=0; i<w; i++){
        for(let j=0; j<h; j++){
            let sum = 0;
            sum+=image[0+j][0+i]+image[0+j][1+i]+image[0+j][2+i]
                +image[1+j][0+i]+image[1+j][1+i]+image[1+j][2+i]
                +image[2+j][0+i]+image[2+j][1+i]+image[2+j][2+i];
            result[j][i] = Math.floor(sum/9);
        }
    }
    return result;
}


console.log(boxBlur([[7,4,0,1], 
    [5,6,2,2], 
    [6,10,7,8], 
    [1,4,2,0]])); 

// [[5,4], 
//  [4,4]]