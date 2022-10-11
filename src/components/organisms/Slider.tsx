import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { state } from "../../server/serverState";
import { currentPage } from "../../server/serverState";
import { LaunchEl } from "../../types";
import TourCards from "../molecules/TourCards";
import EnterActiveDots from "../molecules/EnterActiveDots";
const GET_LAUNCHES = gql`
  query GetLaunches {
    histories(limit: 18) {
      flight {
        links {
          flickr_images
        }
        mission_name
      }
      id
      title
    }
  }
`;
export default function Slider() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  const fetchedLaunches: LaunchEl[] = data ? data.histories : undefined;
  const [launchesList, setLaunchesList] = useRecoilState(state);
  const setCurrentPage = useSetRecoilState(currentPage);
  const [lastActiveLaunch, setLastActiveLaunch] = useState(2);
  const [firstActiveLaunch, setFirstActiveLaunch] = useState(0);
  const [activeLaunchesList, setActiveLaunchesList] = useState<LaunchEl[]>([]);
  const [activeCircle, setActiveCircle] = useState<number>(0);
  const [clickType, setClickType] = useState("right");
  useEffect(() => {
    fetchedLaunches &&
      setLaunchesList(
        fetchedLaunches
          .filter(
            (fetchedLaunch) =>
              fetchedLaunch.flight !== null &&
              fetchedLaunch.flight.links.flickr_images?.length !== 0
          )
          .slice(0, 9)
      );
    setCurrentPage("");
  }, [data]);
  useEffect(() => {
    fetchedLaunches &&
      setActiveLaunchesList(
        launchesList.filter(
          (launch: LaunchEl, i: number) =>
            i >= firstActiveLaunch && i <= lastActiveLaunch && launch
        )
      );
  }, [launchesList]);
  useEffect(() => {
    let middleEl: number = firstActiveLaunch + 1;
    if (firstActiveLaunch === 0) {
      setActiveCircle(0);
    } else if (firstActiveLaunch === 3) {
      setActiveCircle(1);
    } else {
      setActiveCircle(2);
    }
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
  console.log(firstActiveLaunch, lastActiveLaunch);
  return (
    <section>
      <h1>POPULAR TOURS</h1>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <TourCards
        clickType={clickType}
        activeLaunchesList={activeLaunchesList}
      />
      <EnterActiveDots activeCircle={activeCircle} />
    </section>
  );
}
