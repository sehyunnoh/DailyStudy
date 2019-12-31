class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log("constructor");
  }

  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

// Person.prototype.sum = function(){
//     return 'modified : ' + (this.first + this.second + this.third);
// }

var kim = new PersonPlus("kim", 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());
// kim.sum = function(){
//     return 'this : ' + (this.first + this.second);
// }
// var lee = new Person('lee', 10,10,10);

// console.log(kim.sum());
// console.log(lee.sum());
