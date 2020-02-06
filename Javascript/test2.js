let data = ["account_#", "name", "address", "phone", "SIN", "DOB"];
let result = [];

for(let i=0; i<data.length; i++){
    let newObj = {};
    newObj[data[i]] = '';
    result.push(newObj);

}

// for(i in a){
// }






// var input = [['name', 'Bob'], ['age', 42], ['breakfast', 'eggs']];
// var output = {};
// for(i in input) output[input[i][0]] = input[i][1];


console.log(result);