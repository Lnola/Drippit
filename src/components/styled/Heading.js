import styled, { keyframes } from 'styled-components';

const upAndDown = keyframes`
  0% {
    top: 45px;
  }
  8.33% {
    top: 50px;
  }
  58.33% {
    top: 20px;
  }
  100% {
    top: 45px;
  }
`;

const Heading = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 200px;
  margin-bottom: 60px;
  text-align: center;

  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: orange;
    border-radius: 50%;
    top: 45px;
    left: 249px;
    animation: ${upAndDown} 3.5s infinite;
  }

  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: purple;
    border-radius: 50%;
    top: 45px;
    right: 123px;
    animation: ${upAndDown} 3s infinite 1s;
  }

  & > span {
    z-index: 0;
    position: absolute;
    display: inline-block;
    height: 50px;
    top: 40px;
    left: 249px;
    right: 123px;
    background-color: white;
  }
`;

export default Heading;
