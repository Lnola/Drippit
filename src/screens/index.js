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
      isTubeClicked: null,
      indexInNewArray: null,
    };
  }

  componentDidMount() {
    this.setState({
      tubes: initTubes(this.state.numberOfTubes),
      isTubeClicked: new Array(this.state.numberOfTubes).fill(false),
    });
  }

  onTubeClick = (tubeIndex) => {
    let { isTubeClicked, tubes } = this.state;
    let indexOfPreviousClicked = isTubeClicked.indexOf(true);

    const clickedTube = tubes[tubeIndex];
    const lastDrop = clickedTube[clickedTube.length - 1];
    const previousTube = tubes[indexOfPreviousClicked];

    const isTheSameTubeClicked = tubeIndex === indexOfPreviousClicked;
    const isAnyTubeClicked = indexOfPreviousClicked !== -1;
    const isTubeFull = clickedTube.length === 4;
    const isClickedTubeEmpty = lastDrop === undefined;
    const doTheColorsMatch = isAnyTubeClicked
      ? lastDrop === previousTube[previousTube.length - 1]
      : false;

    if (
      !isTheSameTubeClicked &&
      !isTubeFull &&
      (doTheColorsMatch || isClickedTubeEmpty)
    ) {
      clickedTube.push(previousTube.pop());

      if (didPlayerWin(tubes)) {
        setTimeout(() => {
          this.setState({ tubes: initTubes(this.state.numberOfTubes) });
        }, 500);
      }
    } else isTubeClicked[tubeIndex] = !isTubeClicked[tubeIndex];

    if (isAnyTubeClicked && !isTheSameTubeClicked)
      isTubeClicked[indexOfPreviousClicked] =
        !isTubeClicked[indexOfPreviousClicked];

    this.setState({ indexInNewArray: clickedTube.length });
    this.setState({ isTubeClicked });
  };

  render() {
    const { tubes, isTubeClicked, indexInNewArray } = this.state;

    if (!isTubeClicked) return null;

    return (
      <Flex direction='column'>
        <Heading />
        <Flex>
          {tubes.map((tube, index) => (
            <span key={index} onClick={() => this.onTubeClick(index)}>
              <Tube
                drops={tube}
                isClicked={isTubeClicked[index]}
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
