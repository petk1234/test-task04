import { Link } from "react-router-dom";
import styled from "styled-components";
import latoFontMedium from "../../fonts/Lato-Regular.ttf";
export type RouterLinkProps = {
  size?: number | undefined;
  color?: string;
};
export const RouterLinkStyled = styled(Link)<RouterLinkProps>`
  @font-face {
    font-family: "Lato";
    src: url(${latoFontMedium}) format("opentype");
    font-weight: normal;
  }
  font-family: "Lato";
  font-weight: normal;
  text-decoration: none;
  color: ${(props) => props.color || "#000"};
  cursor: pointer;
  &:hover::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #fff;
    color: red;
  }
`;
