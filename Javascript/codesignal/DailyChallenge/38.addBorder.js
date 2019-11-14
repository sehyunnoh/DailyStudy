function addBorder(p) {
  let result = Array(p.length+2).fill('*').map(x => Array(p[0].length+2).fill('*'));
  for(let i=0; i<p.length; i++){
      for(let j=0; j<p[i].length; j++){
          result[i+1][j+1] = ''+p[i][j];
      }
  }
  return result;
}


console.log(addBorder(["abcde", 
"fghij", 
"klmno", 
"pqrst", 
"uvwxy"]));