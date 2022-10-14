import { useRecoilState } from "recoil";
import { currentPage } from "../../server/appState";
import { useEffect } from "react";
import Header from "../organisms/Header";
import GreetingsWrapper from "../organisms/GreetingsWrapper";
import Slider from "../organisms/Slider";
export default function FavouritePage() {
  const [pageType, setCurrentPage] = useRecoilState(currentPage);
  useEffect((): void => {
    setCurrentPage("favourites");
  }, []);
  return (
    <>
      <Header />
      <GreetingsWrapper />
      <Slider pageType={pageType} />
    </>
  );
}
