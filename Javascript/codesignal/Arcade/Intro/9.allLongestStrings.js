function allLongestStrings(array) {
let num = 0;
for(let i=0; i<array.length;i++){if(array[i].length > num) num = array[i].length}
let result = [];
for(let i=0; i<array.length;i++){if(array[i].length == num) result.push(array[i])}
return result;
}


console.log(allLongestStrings(["a", 
"abc", 
"cbd", 
"zzzzzz", 
"a", 
"abcdef", 
"asasa", 
"aaaaaa"]));