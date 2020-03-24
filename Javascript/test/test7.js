// let a = ['a','a','b','b','e','e','d','d','c','c'];
let a = ['a','b','b','e','d','d','c'];

let b = [...a].sort();
let c = [];

 for( let i=0; i<b.length-1; i++){
     if(b[i] == b[i+1]){
        c.push(b[i++]);
     }
 }

 console.log(c);