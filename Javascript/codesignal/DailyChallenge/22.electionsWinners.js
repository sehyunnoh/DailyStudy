function electionsWinners(votes, k) {
  let result = 0;
  votes.sort(function(a, b) {return b - a;});

if(k==0){
    if(votes[0] != votes[1]) result = 1;
}else{
    for (let i = 0; i < votes.length; i++) {
      if (votes[0] < votes[i] + k) {
        result++;
      } else {
        break;
      }
    }
}
  return result;
}

// console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([1, 3, 3, 1, 1], 0));
