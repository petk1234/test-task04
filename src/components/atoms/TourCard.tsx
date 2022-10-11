import styled from "styled-components";
type CardProps = {
  liIndex: number;
  pageType?: string;
};
export const TourCard = styled.li<CardProps>`
  ${(props) => {
    console.log(props);
    return props.pageType !== "favourites"
      ? `position: absolute; left: ${33 * props.liIndex}%;`
      : `display:flex; flex-wrap: wrap;`;
  }}
  flex-direction:column;
`;
