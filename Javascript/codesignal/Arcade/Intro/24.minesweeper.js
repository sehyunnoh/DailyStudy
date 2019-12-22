function minesweeper(m) {
    let w=m[0].length;
    let h=m.length;
    let arr = Array(h).fill().map(x=>Array(w).fill());
    for(let i=0; i<h; i++){
        let num = 0;
        for(let j=0; j<w; j++){
            if(i-1 >= 0 && j-1 >= 0) if(m[i-1][j-1] === true) num++;
            if(i-1 >= 0) if(m[i-1][j] === true) num++;
            if(i-1 >= 0 && j+1 < w) if(m[i-1][j+1] === true) num++;
            if(j+1 < w) if(m[i][j+1] === true) num++;
            if(i+1 < h && j+1 < w) if(m[i+1][j+1] === true) num++;
            if(i+1 < h) if(m[i+1][j] === true) num++;
            if(i+1 < h && j-1>=0) if(m[i+1][j-1] === true) num++;
            if(j-1>=0) if(m[i][j-1] === true) num++;
            arr[i][j] = num;
            num = 0;
        }
    }
    return arr;
}


console.log(minesweeper([[true,false,false], 
                        [false,true,false], 
                        [false,false,false]]));

                        // [[1,2,1], 
                        // [2,1,1], 
                        // [1,1,1]]                        