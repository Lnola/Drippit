export const didPlayerWin = (tubes) => {
  let counter = 0;
  tubes.forEach((tube) => {
    if (tube.every((e) => e === tube[0]) && tube.length === 4) counter++;
  });

  if (counter === 4) return true;

  return false;
};
