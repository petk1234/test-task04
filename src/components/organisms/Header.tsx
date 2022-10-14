import { DivFlex } from "../atoms/DivFlex";
import { Img } from "../atoms/Img";
import { Details } from "../atoms/Details";
import logo from "../../images/logo.svg";
import Navbar from "../molecules/Navbar";
import HeaderOptions from "../molecules/HeaderOptions";
import { useRecoilState } from "recoil";
import { currentPage } from "../../server/appState";
import { RouterLinkStyled } from "../atoms/RouterLinkStyled";
export default function Header() {
  const [pageType, setPageType] = useRecoilState<string>(currentPage);
  return (
    <header>
      <Details bg="#1E1E1E" opacity={0.48} shadow fixed>
        <DivFlex width="100%" height="60px">
          <DivFlex
            justifyContent={pageType === "" ? "space-around" : "center"}
            shadow
            width="1403px"
            height="60px"
          >
            {pageType === "" && (
              <RouterLinkStyled to="/">
                <Img src={logo} width="229px" height="42px" />
              </RouterLinkStyled>
            )}
            <Navbar />
            {pageType === "" && <HeaderOptions />}
          </DivFlex>
        </DivFlex>
      </Details>
    </header>
  );
}
