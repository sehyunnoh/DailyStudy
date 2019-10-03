function minimumBribes(q) {
  let result = 0;
  let cnt = q.length;
  loop: while (cnt > 0) {
    let tmpB = 0;
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i] == cnt && q[i] > q[i + 1]) {
        let tmp = q[i + 1];
        q[i + 1] = cnt;
        q[i] = tmp;
        result++;
        tmpB++;
      }
      if (tmpB > 2) {
        result = "Too chaotic";
        break loop;
      }
    }
    cnt--;
  }
  console.log(result);
}

minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
