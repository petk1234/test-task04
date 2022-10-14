import { DivFlex } from "./DivFlex";
import { ListEl } from "./ListEl";
type Props = {
  el: number;
  circle: number | undefined;
};
export default function ActiveDot({ el, circle }: Props) {
  return <ListEl outer>{el === circle && <DivFlex inner></DivFlex>}</ListEl>;
}
