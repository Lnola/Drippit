import styled from "styled-components";

const Drop = styled.span`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 5px;

  ${({ color }) => color && `background-color: ${color};`}
  ${({ isDropClicked, index, indexInNewArray }) =>
    isDropClicked
      ? `
        animation-name: dropRise;
        animation-duration: 0.3s;
        top:-${60 * index}px;
        
        @keyframes dropRise {
          0% {
            top: 0px;
          }

        }`
      : `
        animation-name: dropBounce;
        animation-duration: 0.3s;
      
        @keyframes dropBounce {
          0% {
            top: -${60 * indexInNewArray}px;
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
      }`};
`;

export default Drop;
