const didPlayerWin = (tubes) => {
  let counter = 0;
  tubes.forEach(
    (tube) => tube.every((e) => e === tube[0]) && tube.length === 4 && counter++
  );
  return counter === 4;
};

export default didPlayerWin;
