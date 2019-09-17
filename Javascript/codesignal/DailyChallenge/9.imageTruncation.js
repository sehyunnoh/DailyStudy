function imageTruncation(image, threshold) {
    for(let i=0; i<image.length; i++){
        for(let j=0; j<image[i].length;j++){
            if( image[i][j] > threshold){
                image[i][j] = threshold;
            }
        }
    }
    return image;
}

var image = [[0,100,100], [1,255,103]]
var threshold = 102;

console.log(imageTruncation(image, threshold));
