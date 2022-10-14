import { Link } from "react-scroll";
import styled from "styled-components";
import explore from "../../images/explore.png";
import latoFontMedium from "../../fonts/Lato-Regular.ttf";
export type LinkProps = {
  size?: number | undefined;
  color?: string;
};
export const ScrollLinkStyled = styled(Link)<LinkProps>`
  @font-face {
    font-family: "Lato";
    src: url(${latoFontMedium}) format("opentype");
    font-weight: normal;
  }
  font-family: "Lato";
  font-weight: normal;
  text-decoration: none;
  color: ${(props) => props.color || "#000"};
  font-size: 32px;
  color: #fff;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  &:after {
    content: url(${explore});
    display: flex;
    align-items: center;
    height: 36px;
    width: 36px;
  }
`;
