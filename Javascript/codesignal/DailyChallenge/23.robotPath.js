function robotPath(instructions, bound) {
    let h=0, v=0;
    let array = instructions.split("");
    for(let i=0; i < array.length; i++){
        if(array[i] == 'L'){
            if(-bound < h) h--;
        }else if(array[i] == 'R'){
            if(bound > h) h++;
        }else if(array[i] == 'U'){
            if(bound > v) v++
        }else if(array[i] == 'D'){
            if(-bound < v) v--;
        }
    }
    return [h,v];
}


console.log(robotPath('LLLLUUUUDR',2));