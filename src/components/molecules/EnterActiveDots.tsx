import styled from "styled-components";
import { EnterActiveDot } from "../atoms/EnterActiveDot";
const EnterActiveDotsStyled = styled.ul`
  display: flex;
  list-style: none;
`;

type EnterActiveDotsProps = {
  activeCircle: number | undefined;
};

export default function EnterActiveDots({
  activeCircle,
}: EnterActiveDotsProps) {
  return (
    <EnterActiveDotsStyled>
      {[0, 1, 2].map((el) => (
        <EnterActiveDot
          key={el}
          el={el}
          activeCircle_={activeCircle}
        ></EnterActiveDot>
      ))}
    </EnterActiveDotsStyled>
  );
}
