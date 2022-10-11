import styled from "styled-components";
// import { TourCardImg, TitleText, BasicButton } from "../atoms";
import { TourCardImg } from "../atoms/TourCardImg";
import { TitleText } from "../atoms/TitleText";
import { BasicButton } from "../atoms/BasicButton";
import { TourCard } from "../atoms/TourCard";
import { LaunchEl } from "../../types";
import { useRecoilState } from "recoil";
import { favsState } from "../../server/serverState";

type CardWrapperProps = {
  launch: LaunchEl;
  liIndex: number;
  pageType?: string;
};
export default function TourCardWrapper({
  launch,
  liIndex,
  pageType,
}: CardWrapperProps) {
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
    console.log(launch);
    setFavsLaunchesList(
      favsLaunchesList.filter(
        (favouriteLaunch_) => favouriteLaunch_.id !== launch.id
      )
    );
  };
  return (
    <TourCard pageType={pageType} liIndex={liIndex}>
      <TourCardImg
        src={
          launch.flight.links.flickr_images !== null
            ? launch.flight.links.flickr_images[0]
            : ""
        }
      />
      <TitleText>{launch.title}</TitleText>
      <BasicButton
        onClick={() => {
          pageType === "favourites" ? deleteFav(launch) : addInFav(launch);
        }}
      >
        {pageType === "favourites" ? "Delete" : "Favs"}
      </BasicButton>
    </TourCard>
  );
}
