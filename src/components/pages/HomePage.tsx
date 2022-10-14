import Header from "../organisms/Header";
import GreetingsWrapper from "../organisms/GreetingsWrapper";
import Slider from "../organisms/Slider";
import { useRecoilState } from "recoil";
import { currentPage } from "../../server/appState";
import { useEffect } from "react";
export default function HomePage() {
  const [pageType, setCurrentPage] = useRecoilState(currentPage);
  useEffect((): void => {
    setCurrentPage("");
  }, []);
  return (
    <>
      <Header />
      <GreetingsWrapper />
      <Slider pageType={pageType} />
    </>
  );
}
