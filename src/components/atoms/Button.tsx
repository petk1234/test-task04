import styled from "styled-components";
import heart_bg from "../../images/heart.svg";
import delete_bg from "../../images/delete.png";
import left_bg from "../../images/arrow-left.svg";
import right_bg from "../../images/arrow-right.svg";
import SyneSemi from "../../fonts/Syne-SemiBold.ttf";
type ButtonProps = {
  width?: string;
  height?: string;
  toFavourites?: boolean;
  toDelete?: boolean;
  previous?: boolean;
  next?: boolean;
  shadow?: boolean;
};
export const Button = styled.button<ButtonProps>`
  @font-face {
    font-family: "Lato";
    src: url(${SyneSemi}) format("truetype");
    font-weight: 600;
  }
  font-weight: 600;
  ${(props) => props.shadow && "text-shadow: 0 2px 2px;"}
  width: ${(props) => props.width || "80%"};
  height: ${(props) => props.height || "50px"};
  color: #000;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #d3eaff;
  cursor: pointer;
  ${(props) => {
    if (props.toFavourites) {
      return `
        background: url(${heart_bg}) no-repeat center;
        background-color: #ECECEC;
      `;
    }
    if (props.toDelete) {
      return `
        background: url(${delete_bg}) no-repeat center;
        background-color: #ECECEC;
      `;
    }
    if (props.previous) {
      return `
      background: url(${left_bg}) no-repeat center;
      background-color: #ECECEC; `;
    }
    if (props.next) {
      return `
      background: url(${right_bg}) no-repeat center;
      background-color: #ECECEC; `;
    }
  }}
`;
