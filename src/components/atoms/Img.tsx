import styled from "styled-components";
type Image = {
  width?: string;
  height?: string;
};
export const Img = styled.img<Image>`
  // width: ${(props) => props.width || "100%"};
  // height: ${(props) => props.height || "100%"};
  position: relative;
`;
