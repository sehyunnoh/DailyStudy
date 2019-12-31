var o1 = {name: 'kim', score: [1,2]};
Object.freeze(o1);
Object.freeze(o1.score);
o1.name = 'lee';
console.log(o1);
