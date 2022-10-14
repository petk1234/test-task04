import { DivFlex } from "../atoms/DivFlex";
import { Button } from "../atoms/Button";
import { RouterLinkStyled } from "../atoms/RouterLinkStyled";
export default function HeaderOptions() {
  return (
    <DivFlex width="230px" justifyContent="space-between">
      <Button shadow width="163px" height="53px">
        SIGN IN
      </Button>
      <RouterLinkStyled to="/favourites">
        <Button width="53px" height="53px" toFavourites />
      </RouterLinkStyled>
    </DivFlex>
  );
}
