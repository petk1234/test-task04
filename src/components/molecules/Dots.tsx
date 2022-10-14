import styled from "styled-components";
import EnterActiveDot from "../atoms/ActiveDot";
const EnterActiveDotsStyled = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;

type EnterActiveDotsProps = {
  activeCircle: number | undefined;
};

export default function Dots({ activeCircle }: EnterActiveDotsProps) {
  return (
    <EnterActiveDotsStyled>
      {[0, 1, 2].map((el) => (
        <EnterActiveDot key={el} el={el} circle={activeCircle} />
      ))}
    </EnterActiveDotsStyled>
  );
}
