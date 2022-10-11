import { useRecoilState } from "recoil";
import { favsState } from "../../server/serverState";
import { LaunchEl } from "../../types";
import TourCards from "../molecules/TourCards";
import { currentPage } from "../../server/serverState";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
export default function FavouritePage() {
  const [favouriteLaunches, setFavouriteLaunches] =
    useRecoilState<LaunchEl[]>(favsState);
  const setCurrentPage = useSetRecoilState(currentPage);
  useEffect((): void => {
    setCurrentPage("favourites");
  }, []);
  return (
    <section>
      <TourCards activeLaunchesList={favouriteLaunches}></TourCards>
    </section>
  );
}
