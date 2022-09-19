import React, { Component } from 'react';
import { Flex } from 'components/styled';
import { Tube, Heading } from 'components/common';
import { initTubes, didPlayerWin } from 'utils';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tubes: [],
      numberOfTubes: 4,
      isDropClicked: null,
      indexInNewArray: null,
    };
  }

  componentDidMount() {
    this.setState({
      tubes: initTubes(this.state.numberOfTubes),
      isDropClicked: new Array(this.state.numberOfTubes).fill(false),
    });
  }

  onDropClick = (tubeIndex) => {
    let { isDropClicked, tubes } = this.state;
    let indexOfPreviousClicked = isDropClicked.indexOf(true);

    const isTheSameTubeClicked = tubeIndex === indexOfPreviousClicked;
    const isAnyTubeClicked = indexOfPreviousClicked !== -1;
    const isTubeFull = tubes[tubeIndex].length === 4;
    const isClickedTubeEmpty =
      tubes[tubeIndex][tubes[tubeIndex].length - 1] === undefined;
    const doTheColorsMatch = isAnyTubeClicked
      ? tubes[tubeIndex][tubes[tubeIndex].length - 1] ===
        tubes[indexOfPreviousClicked][tubes[indexOfPreviousClicked].length - 1]
      : false;

    if (
      !isTheSameTubeClicked &&
      isAnyTubeClicked &&
      !isTubeFull &&
      (doTheColorsMatch || isClickedTubeEmpty)
    ) {
      tubes[tubeIndex].push(tubes[indexOfPreviousClicked].pop());

      if (didPlayerWin(tubes)) {
        setTimeout(() => {
          this.setState({ tubes: initTubes(this.state.numberOfTubes) });
        }, 500);
      }
    } else isDropClicked[tubeIndex] = !isDropClicked[tubeIndex];

    if (isAnyTubeClicked && !isTheSameTubeClicked)
      isDropClicked[indexOfPreviousClicked] =
        !isDropClicked[indexOfPreviousClicked];

    this.setState({ indexInNewArray: tubes[tubeIndex].length });
    this.setState({ isDropClicked });
  };

  render() {
    const { tubes, isDropClicked, indexInNewArray } = this.state;

    if (!isDropClicked) return null;

    return (
      <Flex direction='column'>
        <Heading />
        <Flex>
          {tubes.map((tube, index) => (
            <span key={index} onClick={() => this.onDropClick(index)}>
              <Tube
                drops={tube}
                isDropClicked={isDropClicked[index]}
                indexInNewArray={indexInNewArray}
              />
            </span>
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default Game;
