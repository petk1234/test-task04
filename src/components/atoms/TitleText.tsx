import styled from "styled-components";
import syneFontExtra from "../../fonts/Syne-Extra.otf";
import syneFontBold from "../../fonts/Syne-Bold.otf";
export type TitleProps = {
  titleSize?: number | undefined;
  color?: string;
  extra?: boolean;
  bold?: boolean;
};
export const TitleText = styled.h1<TitleProps>`
  @font-face {
    font-family: "Syne";
    src: url(${syneFontBold}) format("opentype");
    font-weight: bold;
  }
  @font-face {
    font-family: "Syne";
    src: url(${syneFontExtra}) format("opentype");
    font-weight: 900;
  }
  font-family: "Syne";
  font-weight: ${(props) => (props.bold ? "bold" : 900)};
  font-size: ${(props: TitleProps) => props.titleSize || 16}px;
  font-size: ${(props: TitleProps) => props.titleSize || 16}px;
  color: ${(props) => props.color || "#000"};
  text-align: justify;
  margin: 10px;
`;
