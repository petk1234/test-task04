import styled from "styled-components";
import latoFontMedium from "../../fonts/Lato-Regular.ttf";
export type LinkProps = {
  size?: number | undefined;
  color?: string;
};
export const LinkStyled = styled.a<LinkProps>`
  @font-face {
    font-family: "Lato";
    src: url(${latoFontMedium}) format("opentype");
    font-weight: normal;
  }
  font-family: "Lato";
  font-weight: normal;
  text-decoration: none;
  color: ${(props) => props.color || "#000"};
  font-size: 16px;
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
