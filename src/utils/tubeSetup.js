import shuffle from 'shuffle-array';
import colors from '../constants/colors';

const tubeSetup = (numberOfTubes) => {
  const randomColors = shuffle(colors).slice(0, numberOfTubes);
  let sameColorTubes = [];
  let tubes = [];

  for (let i = numberOfTubes; i > 0; i--)
    sameColorTubes = sameColorTubes.concat(
      new Array(4).fill(randomColors[i - 1])
    );

  sameColorTubes = shuffle(sameColorTubes);

  for (let i = 0; i < numberOfTubes + 2; i++)
    tubes.push(sameColorTubes.splice(0, 4));

  return tubes;
};

export default tubeSetup;
