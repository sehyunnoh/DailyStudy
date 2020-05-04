const axios = require("axios");

async function closestStations(stations) {
  const promises = await stations.map(async (station) => {
    const val = await axios.get(
      `http://transportapi.com/v3/uk/places.json?query=${station}&type=train_station&app_id=8b9cd4d9&app_key=69eaf54e2f7d2f279a03077acab2721b`
    );
    return val.data.member[0];
  });

  const res = await Promise.all(promises);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      let tmp = Math.sqrt(
        (res[i].latitude - res[j].latitude) ** 2 +
          (res[i].longitude - res[j].longitude) ** 2
      );
      if (min > tmp) min = tmp;
    }
  }
  return min;
}

closestStations(["Euston", "Mossley Hill", "Glasgow Central"]).then((result) =>
  console.log(result)
);
// closestStations([
//   "Pewsey",
//   "Deal",
//   "Evesham",
//   "Cookham",
//   "Bolton",
//   "Queens Park London",
// ]).then((result) => console.log(result));
