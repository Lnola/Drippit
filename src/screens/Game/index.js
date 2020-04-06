import React, { Component } from "react";
import Flex from "../../components/styled/Flex";
import Tube from "./Tube";
import { tubesSetup } from "../../utils/TubesSetup";
import { didPlayerWin } from "../../utils/DidPlayerWin";

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
      tubes: tubesSetup(this.state.numberOfTubes),
      isDropClicked: new Array(this.state.numberOfTubes).fill(false),
    });
  }

  onDropClick = (tubeIndex) => {
    let { isDropClicked, tubes } = this.state;
    let indexOfPreviousClicked = isDropClicked.indexOf(true);

    //CONDITIONS

    const isTheSameTubeClicked = tubeIndex === indexOfPreviousClicked;
    const isAnyTubeClicked = indexOfPreviousClicked !== -1;
    const isTubeFull = tubes[tubeIndex].length === 4;
    const isClickedTubeEmpty =
      tubes[tubeIndex][tubes[tubeIndex].length - 1] === undefined;
    const doTheColorsMatch = isAnyTubeClicked
      ? tubes[tubeIndex][tubes[tubeIndex].length - 1] ===
        tubes[indexOfPreviousClicked][tubes[indexOfPreviousClicked].length - 1]
      : false;

    //CONDITIONS

    if (
      !isTheSameTubeClicked &&
      isAnyTubeClicked &&
      !isTubeFull &&
      (doTheColorsMatch || isClickedTubeEmpty)
    ) {
      tubes[tubeIndex].push(tubes[indexOfPreviousClicked].pop());

      if (didPlayerWin(tubes)) {
        setTimeout(() => {
          this.setState({ tubes: tubesSetup(this.state.numberOfTubes) });
        }, 500);
      }
    } else isDropClicked[tubeIndex] = !isDropClicked[tubeIndex];

    if (isAnyTubeClicked && !isTheSameTubeClicked)
      isDropClicked[indexOfPreviousClicked] = !isDropClicked[
        indexOfPreviousClicked
      ];

    this.setState({ indexInNewArray: tubes[tubeIndex].length });
    this.setState({ isDropClicked });
  };

  render() {
    const { tubes, isDropClicked, indexInNewArray } = this.state;

    if (!isDropClicked) return null;

    return (
      <Flex>
        {tubes.map((tube, index) => (
          <Tube
            key={index}
            drops={tube}
            tubeIndex={index}
            isDropClicked={isDropClicked[index]}
            indexInNewArray={indexInNewArray}
            handleDropClick={this.onDropClick}
          />
        ))}
      </Flex>
    );
  }
}

export default Game;
