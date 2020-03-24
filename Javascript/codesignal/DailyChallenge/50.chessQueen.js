function chessQueen(q) {
    let map = new Array(8).fill().map(()=>new Array(8).fill(0));
    let qPos = conToNum(q).split("");

    for(let i=0; i<map.length; i++){
        for(let j=0; j<map[i].length; j++){
            if(i === +qPos[0]) map[i][j] = 1;
            if(j === +qPos[1]) map[i][j] = 1;
            if(Math.abs(i- +qPos[0]) === Math.abs(j- +qPos[1])) map[i][j] = 1;
        }
    }

    let result = [];
    for(let i=0; i<map.length; i++){
        for(let j=0; j<map[i].length; j++){
            if(map[i][j] === 0) {
                result.push(conToAlp(""+i+j));
            }
        }
    }

    return result.sort();
}

const conToNum = (pos) => {
    let arr = pos.split("");
    return ""+ (8-arr[1])+(arr[0].charCodeAt(0) - 97);
}

const conToAlp = (pos) => {
    let arr = pos.split("");
    return ""+(String.fromCharCode(97+ +arr[1])+(8- +arr[0]));
}

console.log(chessQueen("d4"));

// [
//   "a2",
//   "a3",
//   "a5",
//   "a6",
//   "a8",
//   "b1",
//   "b3",
//   "b5",
//   "b7",
//   "b8",
//   "c1",
//   "c2",
//   "c6",
//   "c7",
//   "c8",
//   "e1",
//   "e2",
//   "e6",
//   "e7",
//   "e8",
//   "f1",
//   "f3",
//   "f5",
//   "f7",
//   "f8",
//   "g2",
//   "g3",
//   "g5",
//   "g6",
//   "g8",
//   "h1",
//   "h2",
//   "h3",
//   "h5",
//   "h6",
//   "h7"
// ];
