let a = [
  {
    name: "a",
    score: 0.3287671232876712,
  },
  {
    name: "c",
    score: 0.3287671232876712,
  },
  {
    name: "d",
    score: 0.3287671232876712,
  },
  {
    name: "f",
    score: 0.3287671232876712,
  },
  {
    name: "g",
    score: 0.3287671232876712,
  },
  {
    name: "h",
    score: 0.3287671232876712,
  },
  {
    name: "i",
    score: 0.3287671232876712,
  },
];

let check = true;

a.sort((a, b) => {
  if (a.score == b.score) {
    if (a.name.length > 1) check = false;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }
  if (a.score > b.score) return -1;
  if (a.score < b.score) return 1;
});

if (check)
  a.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });

console.log(a);
