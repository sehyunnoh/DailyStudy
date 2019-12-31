var membrerArray = ['egoing','graphittie','leezhce'];

console.log(membrerArray[1]);

var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}
memberObject.designer = 'leezche';
console.log(memberObject.designer);

delete memberObject.manager;
console.log(memberObject.manager);