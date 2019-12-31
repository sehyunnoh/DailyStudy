var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first+this.second;
    }
}

var lee = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first+this.second;
    }
}


console.log(kim.sum());
console.log(lee.sum());

var d1 = new Date('2019-4-10');
console.log(d1.getFullYear());
console.log(d1.getMonth());