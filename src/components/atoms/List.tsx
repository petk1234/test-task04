import styled from "styled-components";
type UlProps = {
  height?: string;
  width?: string;
};
export const List = styled.ul<UlProps>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "60px"};
  padding: 0;
  margin: 0;
`;
