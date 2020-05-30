function resourceCatchUp(logOut, logIn) {
  let hour = Math.ceil((logIn[0] - logOut[0]) / 60 / 60);
  return (logOut[1] - logIn[1]) / hour;
}

console.log(resourceCatchUp([1451604600, 100], [1451660401, 36]));
