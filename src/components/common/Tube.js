import React, { Component } from 'react';
import Drop from '../styled/Drop';
import { default as DrippTube } from '../styled/Tube';

class Tube extends Component {
  render() {
    const { drops, isDropClicked, indexInNewArray } = this.props;

    return (
      <DrippTube>
        {drops.map((drop, index) => (
          <Drop
            key={index}
            color={drop}
            index={4 - index}
            isDropClicked={index === drops.length - 1 && isDropClicked}
            indexInNewArray={4 - indexInNewArray}
          />
        ))}
      </DrippTube>
    );
  }
}
export default Tube;
