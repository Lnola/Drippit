import React, { Component } from "react";
import Drop from "../../components/styled/Drop";
import styled from "styled-components";

const Container = styled.span`
  display: flex;
  flex-direction: column-reverse;
  width: 74px;
  height: 247px;
  margin: 20px;
  padding-bottom: 5px;
  border: 2px solid #040404;
  border-top: none;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
`;

class Tube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDropClick = () => {
    this.props.handleDropClick(this.props.tubeIndex);
  };

  render() {
    const { drops, isDropClicked, indexInNewArray } = this.props;

    return (
      <span>
        <Container onClick={this.handleDropClick}>
          {drops.map((drop, index) => (
            <span key={index} className="drop-span">
              {index === drops.length - 1 ? (
                <Drop
                  color={drop}
                  index={4 - index}
                  isDropClicked={isDropClicked}
                  indexInNewArray={5 - indexInNewArray}
                />
              ) : (
                <Drop color={drop} index={index} />
              )}
            </span>
          ))}
        </Container>
      </span>
    );
  }
}
export default Tube;
