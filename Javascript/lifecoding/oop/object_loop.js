var membrerArray = ['egoing','graphittie','leezhce'];
console.group('array loop');

var i = 0;
while (i < membrerArray.length){
    console.log(membrerArray[i]);
    i++;
}
console.groupEnd('array loop');

var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}

console.groupEnd('object loop');