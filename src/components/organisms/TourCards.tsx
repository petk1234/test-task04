import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { LaunchEl } from "../../types";
import Card from "../molecules/Card";
import "./styles/slider-transitions.css";
import { useRecoilState } from "recoil";
import { favsState } from "../../server/appState";
import { Button } from "../atoms/Button";
const TransitionGroupStyled = styled(TransitionGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1260px;
  position: relative;
  min-height: 480px;
  liststyle: none;
  margin-left: auto;
  margin-right: auto;
`;
type TourCardsProps = {
  pageType?: string;
  clickType?: string;
  activeLaunchesList: LaunchEl[];
};
export default function TourCards({
  pageType,
  clickType = "right",
  activeLaunchesList,
}: TourCardsProps) {
  const [favsLaunchesList, setFavsLaunchesList] =
    useRecoilState<LaunchEl[]>(favsState);
  const addInFav = (launch: LaunchEl): void => {
    const isAlreadyInFavs = favsLaunchesList.filter(
      (favLaunch) => favLaunch.id === launch.id
    );
    isAlreadyInFavs.length === 0 &&
      setFavsLaunchesList([...favsLaunchesList, launch]);
  };
  const deleteFav = (launch: LaunchEl): void => {
    setFavsLaunchesList(
      favsLaunchesList.filter(
        (favouriteLaunch_) => favouriteLaunch_.id !== launch.id
      )
    );
  };
  return (
    <>
      <TransitionGroupStyled>
        {activeLaunchesList !== undefined &&
          activeLaunchesList.map((launch: LaunchEl, i: number) => (
            <CSSTransition
              key={launch.id}
              classNames={
                pageType === ""
                  ? clickType === "right"
                    ? "slider-transitions-right"
                    : "slider-transitions-left"
                  : ""
              }
              timeout={400}
            >
              <Card launch={launch} liIndex={i} pageType={pageType}>
                <Button
                  width="53px"
                  height="53px"
                  toFavourites={pageType === "" && true}
                  toDelete={pageType === "favourites" && true}
                  onClick={() => {
                    pageType === "" ? addInFav(launch) : deleteFav(launch);
                  }}
                />
              </Card>
            </CSSTransition>
          ))}
      </TransitionGroupStyled>
    </>
  );
}
