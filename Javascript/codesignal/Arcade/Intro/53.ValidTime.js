function validTime(time) {
    let arr = time.split(':');
    return !(+arr[0] >= 24 || +arr[1] >= 60)
}


console.log(validTime("13:58"));