import greetings_bg from "../../images/greeting-image.png";
import greetings2_bg from "../../images/greeting-image-2.png";
import Greetings from "./Greetings";
import { DivFlex } from "../atoms/DivFlex";
import { TitleText } from "../atoms/TitleText";
import { useRecoilState } from "recoil";
import { currentPage } from "../../server/appState";
export default function GreetingsWrapper() {
  const [pageType, setPageType] = useRecoilState<string>(currentPage);
  return (
    <section id="greetings">
      <Greetings
        greetImg={pageType === "" ? greetings_bg : greetings2_bg}
        pageType={pageType}
      >
        {pageType === "" ? (
          <DivFlex width="100%" height="100%" column absolute>
            <TitleText titleSize={48} extra color="#fff">
              THE SPACE IS WAITING FOR
            </TitleText>
            <TitleText titleSize={310} extra color="#fff">
              YOU
            </TitleText>
          </DivFlex>
        ) : (
          <DivFlex shadow width="100%" height="100%" column absolute>
            <TitleText titleSize={48} extra color="#fff">
              FAVOURITES
            </TitleText>
          </DivFlex>
        )}
      </Greetings>
    </section>
  );
}
