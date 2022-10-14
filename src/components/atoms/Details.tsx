import styled from "styled-components";
type DetailsProps = {
  //   marginRight?: string;
  //   marginLeft?: string;
  padding?: string;
  margin?: string;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  top?: boolean;
  bg?: string;
  opacity?: number;
  fixed?: boolean;
  shadow?: boolean;
};
export const Details = styled.div<DetailsProps>`
  box-sizing: border-box;
  padding-right: ${(props) =>
    props.right && props.padding ? props.padding : "auto"};
  padding-left: ${(props) =>
    props.left && props.padding ? props.padding : "auto"};
  padding-top: ${(props) =>
    props.top && props.padding ? props.padding : "auto"};
  padding-bottom: ${(props) =>
    props.bottom && props.padding ? props.padding : "auto"};
  margin-right: ${(props) =>
    props.right && props.margin ? props.margin : "auto"};
  margin-left: ${(props) =>
    props.left && props.margin ? props.margin : "auto"};
  margin-top: ${(props) => (props.top && props.margin ? props.margin : "auto")};
  margin-bottom: ${(props) =>
    props.bottom && props.margin ? props.margin : "auto"};
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  width: 100%;
  // ${(props) => props.shadow && "background: #1e1e1e48"};
  z-index: 34934;
`;

//   background-color: ${(props) => props.bg || "fff"};
//   opacity: 0.48;
