function perfectCity(s, e) {
  let arr = Array(4).fill().map(x => Array(0).fill());
  let dis = [0, 0, 0, 0];

  if (Number.isInteger(s[1])) {
    // 0.4, 1
    //0,1
    //0,1
    //1,1
    //1,1
    let tmp = Math.floor(s[0]);
    dis[0] += s[0] - tmp;
    dis[1] += s[0] - tmp;
    arr[0].push(tmp, s[1]);
    arr[1].push(tmp, s[1]);

    tmp = Math.ceil(s[0]);
    dis[2] += tmp - s[0];
    dis[3] += tmp - s[0];
    arr[2].push(tmp, s[1]);
    arr[3].push(tmp, s[1]);
  } else {
    // 1, 0.4
    // 1, 0
    // 1, 0
    // 1, 1
    // 1, 1
    let tmp = Math.floor(s[1]);
    dis[0] += s[1] - tmp;
    dis[1] += s[1] - tmp;
    arr[0].push(s[0], tmp);
    arr[1].push(s[0], tmp);

    tmp = Math.ceil(s[1]);
    dis[2] += tmp - s[1];
    dis[3] += tmp - s[1];
    arr[2].push(s[0], tmp);
    arr[3].push(s[0], tmp);
  }

  if (Number.isInteger(e[1])) {
    // 0.4, 1
    //0,1  0.4
    //1,1  0.6
    //1,1  0.6
    //0,1  0.4
    let tmp = Math.floor(e[0]);
    dis[0] += e[0] - tmp;
    dis[3] += e[0] - tmp;
    arr[0].push(tmp, e[1]);
    arr[3].push(tmp, e[1]);

    tmp = Math.ceil(e[0]);
    dis[1] += tmp - e[0];
    dis[2] += tmp - e[0];
    arr[1].push(tmp, e[1]);
    arr[2].push(tmp, e[1]);
  } else {
    // 1, 0.4
    // 1, 0  0.4
    // 1, 1  0.6
    // 1, 1  0.6
    // 1, 0  0.4
    let tmp = Math.floor(e[1]);
    dis[0] += e[1] - tmp;
    dis[3] += e[1] - tmp;
    arr[0].push(e[0], tmp);
    arr[3].push(e[0], tmp);

    tmp = Math.ceil(e[1]);
    dis[1] += tmp - e[1];
    dis[2] += tmp - e[1];
    arr[1].push(e[0], tmp);
    arr[2].push(e[0], tmp);
  }

  for (let i = 0; i < 4; i++) {
    dis[i] += Math.abs(arr[i][2] - arr[i][0]) + Math.abs(arr[i][3] - arr[i][1]);
  }

  return dis.sort((a,b)=>{return a-b})[0];
}

console.log(perfectCity([2.4, 1],[5, 7.3])); // 8.9
// console.log(perfectCity([0.4, 1], [0.9, 3])); // 2.7
// console.log(perfectCity([1, 0.4], [1, 0.4])); // 2.7
