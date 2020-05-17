function allianceHelp(t, allianceSize) {
  let size = allianceSize > 10 ? 10 : allianceSize;
  let work = t * 0.1 > 60 ? ~~(t * 0.1) : 60;
  return t - size * work < 0 ? 0 : t - size * work;
}

console.log(allianceHelp(1000, 10)); // 0
console.log(allianceHelp(999, 11)); // 9
console.log(allianceHelp(100, 1)); // 40
console.log(allianceHelp(100, 10)); // 0
console.log(allianceHelp(909, 500)); // 9
