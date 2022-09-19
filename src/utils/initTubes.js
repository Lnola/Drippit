import shuffle from 'shuffle-array';
import colors from 'constants/colors';

const initTubes = (numberOfFilledTubes = 4, numberOfEmptyTubes = 2) => {
  const numberOfTubes = numberOfFilledTubes + numberOfEmptyTubes;
  const randomColors = shuffle(colors).slice(0, numberOfFilledTubes);
  let sameColorTubes = [];
  let tubes = [];

  for (let i = numberOfFilledTubes; i > 0; i--)
    sameColorTubes = sameColorTubes.concat(
      new Array(4).fill(randomColors[i - 1])
    );

  sameColorTubes = shuffle(sameColorTubes);

  for (let i = 0; i < numberOfTubes; i++)
    tubes.push(sameColorTubes.splice(0, 4));

  return tubes;
};

export default initTubes;
