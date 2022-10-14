import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../../../server/serverRequests";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { state, favsState } from "../../../server/appState";
import { currentPage } from "../../../server/appState";
import { LaunchEl } from "../../../types";

const getAppropriateNineTours = (fetchedLaunches: LaunchEl[]): LaunchEl[] => {
  return fetchedLaunches
    .filter(
      (fetchedLaunch) =>
        fetchedLaunch.flight !== null &&
        fetchedLaunch.flight.links.flickr_images?.length !== 0
    )
    .slice(0, 9);
};

const getInitialActiveTours = (
  launchesList: LaunchEl[],
  firstActiveLaunch: number,
  lastActiveLaunch: number
): LaunchEl[] => {
  return launchesList.filter(
    (launch: LaunchEl, i: number) =>
      i >= firstActiveLaunch && i <= lastActiveLaunch && launch
  );
};

const defineActivecircle = (
  setActiveCircle: ({}: number) => void,
  firstActiveLaunch: number
): void => {
  if (firstActiveLaunch === 0) {
    setActiveCircle(0);
  } else if (firstActiveLaunch === 3) {
    setActiveCircle(1);
  } else {
    setActiveCircle(2);
  }
};
export default function useSlider() {
  const { data } = useQuery(GET_LAUNCHES);
  const fetchedLaunches: LaunchEl[] = data ? data.histories : undefined;
  const [launchesList, setLaunchesList] = useRecoilState(state);
  const [favouriteLaunches, setFavouriteLaunches] =
    useRecoilState<LaunchEl[]>(favsState);
  const setCurrentPage = useSetRecoilState(currentPage);
  const [lastActiveLaunch, setLastActiveLaunch] = useState(2);
  const [firstActiveLaunch, setFirstActiveLaunch] = useState(0);
  const [activeLaunchesList, setActiveLaunchesList] = useState<LaunchEl[]>([]);
  const [activeCircle, setActiveCircle] = useState<number>(0);
  const [clickType, setClickType] = useState("right");

  useEffect(() => {
    fetchedLaunches &&
      setLaunchesList(getAppropriateNineTours(fetchedLaunches));
    setCurrentPage("");
  }, [data]);

  useEffect(() => {
    fetchedLaunches &&
      setActiveLaunchesList(
        getInitialActiveTours(launchesList, firstActiveLaunch, lastActiveLaunch)
      );
  }, [launchesList]);

  useEffect(() => {
    let middleEl: number = firstActiveLaunch + 1;
    defineActivecircle(setActiveCircle, firstActiveLaunch);
    const activeLaunches: LaunchEl[] =
      launchesList.length > 0
        ? [
            launchesList[firstActiveLaunch],
            launchesList[middleEl],
            launchesList[lastActiveLaunch],
          ]
        : [];
    setActiveLaunchesList(activeLaunches);
  }, [lastActiveLaunch, firstActiveLaunch]);

  const handlePrevious = () => {
    setClickType("left");
    firstActiveLaunch !== 0
      ? setFirstActiveLaunch(firstActiveLaunch - 3)
      : setFirstActiveLaunch(launchesList.length - 3);
    lastActiveLaunch !== 2
      ? setLastActiveLaunch(lastActiveLaunch - 3)
      : setLastActiveLaunch(launchesList.length - 1);
  };

  const handleNext = () => {
    setClickType("right");
    firstActiveLaunch !== launchesList.length - 3
      ? setFirstActiveLaunch(firstActiveLaunch + 3)
      : setFirstActiveLaunch(0);
    lastActiveLaunch !== launchesList.length - 1
      ? setLastActiveLaunch(lastActiveLaunch + 3)
      : setLastActiveLaunch(2);
  };

  return {
    favouriteLaunches,
    activeLaunchesList,
    activeCircle,
    clickType,
    handlePrevious,
    handleNext,
    setFavouriteLaunches,
  };
}
