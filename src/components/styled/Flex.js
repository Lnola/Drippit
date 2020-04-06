import styled, { css } from "styled-components";

const getAlignValue = value => {
  switch (value) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "space-between":
      return "space-between";
    case "space-around":
      return "space-around";
    default:
      return null;
  }
};

export const flex = css`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${getAlignValue(justifyContent)};`}
  ${({ justifySelf }) =>
    justifySelf && `justify-self: ${getAlignValue(justifySelf)};`}
  ${({ alignItems }) =>
    alignItems && `align-items: ${getAlignValue(alignItems)};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${getAlignValue(alignSelf)};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

const Flex = styled.div`
  ${flex}
`;

export const FlexMain = styled.main`
  ${flex}
`;

export const FlexAnchor = styled.a`
  ${flex}
`;

export const FlexArticle = styled.article`
  ${flex}
`;

export const FlexSection = styled.section`
  ${flex}
`;

export default Flex;
