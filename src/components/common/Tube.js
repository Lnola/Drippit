import React, { Component } from 'react';
import { Drop, Tube as DRTube } from 'components/styled';

class Tube extends Component {
  render() {
    const { drops, isClicked, indexInNewArray } = this.props;

    return (
      <DRTube>
        {drops.map((drop, index) => (
          <Drop
            key={index}
            color={drop}
            index={4 - index}
            isDropClicked={index === drops.length - 1 && isClicked}
            indexInNewArray={4 - indexInNewArray}
          />
        ))}
      </DRTube>
    );
  }
}
export default Tube;
