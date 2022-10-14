import styled from "styled-components";
import latoFontMedium from "../../fonts/Lato-Regular.ttf";
export type TextProps = {
  size?: number | undefined;
  color?: string;
};
export const Text = styled.p`
  @font-face {
    font-family: "Lato";
    src: url(${latoFontMedium}) format("opentype");
    font-weight: normal;
  }
  font-family: "Lato";
  font-weight: normal;
  font-size: ${(props: TextProps) => props.size || 16}px;
  color: ${(props) => props.color || "#000"};
  text-style: none;
  margin: 2px 0 2px 0;
`;
