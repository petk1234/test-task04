import styled from "styled-components";

type DivFlexProps = {
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  fixed?: boolean;
  absolute?: boolean;
  column?: boolean;
  bottom?: string;
  shadow?: boolean;
  inner?: boolean;
  outer?: boolean;
  max?: string;
};

export const DivFlex = styled.div<DivFlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  min-width: ${(props) => props.width || "0"};
  ${(props) => props.max && `max-width: ${props.max}`};
  height: ${(props) => props.height || "100px"};
  position: ${(props) => {
    if (props.fixed) return "fixed; z-index: 343";
    else if (props.absolute) return "absolute";
    else return "relative";
  }};
  bottom: ${(props) => props.bottom || 10};
  ${(props) => props.shadow && "background: #1e1e1e48;"}
  ${(props) => {
    if (props.inner) {
      return `
    position: absolute;
    width:12px;
    height:12px;
    background-color:black;
    transform: translate(19%, 19%);
    border:none;
    border-radius: 50%;
    margin: -4px 0px 0px -4px;
    `;
    }
  }}
`;
