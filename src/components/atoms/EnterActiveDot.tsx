import styled from "styled-components";
type EnterActiveDotProps = {
  el: number | undefined;
  activeCircle_: number | undefined;
};
export const EnterActiveDot = styled.li<EnterActiveDotProps>`
  width: 5px;
  height: 5px;
  background-color: ${(props) =>
    props.el === props.activeCircle_ ? "black" : "grey"};
`;
