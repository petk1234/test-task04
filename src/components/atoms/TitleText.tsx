import styled from "styled-components";
export type TitleProps = {
  titleSize?: number | undefined;
};
export const TitleText = styled.h1`
  font-size: ${(props: TitleProps) => props.titleSize || 16}px;
`;
