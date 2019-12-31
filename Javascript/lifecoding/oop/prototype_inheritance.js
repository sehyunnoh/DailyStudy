var superObj = { superVal: "super" };

// var subObj = { subVal: "sub" };
// subObj.__proto__ = superObj; // make child

var subObj = Object.create(superObj); // make child
subObj.subVal = 'sub';

// console.log(subObj.subVal);
// console.log(subObj.superVal);

subObj.superVal = 'sub';
// console.log(superObj.superVal);
// console.log(subObj.superVal);

var kim = {
    name: 'kim',
    first:10,
    second: 20,
    sum:function(){return this.first + this.second}
}

var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    avg: function(){return (this.first + this.second)/2}
}

lee.__proto__ = kim ;
console.log(lee.sum());
console.log(lee.avg());