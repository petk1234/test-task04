import useSlider from "./hooks/useSlider";
import TourCards from "./TourCards";
import { TitleText } from "../atoms/TitleText";
import { DivFlex } from "../atoms/DivFlex";
import { Button } from "../atoms/Button";
import Dots from "../molecules/Dots";
import { LinkStyled } from "../atoms/LinkStyled";
export default function Slider({ pageType }: { pageType: string }) {
  const {
    favouriteLaunches,
    activeLaunchesList,
    activeCircle,
    clickType,
    handlePrevious,
    handleNext,
    setFavouriteLaunches,
  } = useSlider();

  return (
    <section id="tours">
      {pageType === "" ? (
        <DivFlex width="100%">
          <DivFlex justifyContent="space-between" width="1260px">
            <TitleText>POPULAR TOURS</TitleText>
            <DivFlex width=" 110px" justifyContent="space-around">
              <Button
                width="44px"
                height="44px"
                previous
                onClick={handlePrevious}
              />
              <Button width="44px" height="44px" next onClick={handleNext} />
            </DivFlex>
          </DivFlex>
        </DivFlex>
      ) : (
        <DivFlex>
          <DivFlex width="1300px" max="1300px" justifyContent="flex-end">
            <LinkStyled
              color="#C0C0C0 "
              onClick={() => setFavouriteLaunches([])}
            >
              Clear all
            </LinkStyled>
          </DivFlex>
        </DivFlex>
      )}
      <TourCards
        pageType={pageType}
        clickType={clickType}
        activeLaunchesList={
          pageType === "" ? activeLaunchesList : favouriteLaunches
        }
      />
      {pageType === "" && <Dots activeCircle={activeCircle} />}
    </section>
  );
}
