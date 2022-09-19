import styled, { css } from 'styled-components';

const rise = (index) => css`
  animation-name: dropRise;
  animation-duration: 0.3s;
  top: -${60 * index}px;

  @keyframes dropRise {
    0% {
      top: 0px;
    }
  }
`;

const bounce = (index) => css`
  animation-name: dropBounce;
  animation-duration: 0.3s;

  @keyframes dropBounce {
    0% {
      top: -${60 * index}px;
    }
    40% {
      top: 12px;
      height: 52px;
    }
    70% {
      top: -22px;
    }
    100% {
      top: 0px;
      height: 60px;
    }
  }
`;

const Drop = styled.span`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 5px;

  ${({ color }) => color && `background-color: ${color};`}
  ${({ isDropClicked, index, indexInNewArray }) =>
    isDropClicked ? rise(index) : bounce(indexInNewArray)};
`;

export default Drop;
