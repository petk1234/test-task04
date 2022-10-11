import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { LaunchEl } from "../../types";
import TourCardWrapper from "../tour_card/TourCardWrapper";
import "../organisms/launches-list.css";
import { currentPage } from "../../server/serverState";
import { useRecoilState } from "recoil";
const TransitionGroupStyled = styled(TransitionGroup)`
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  position: relative;
  min-height: 400px;
  liststyle: none;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;
`;

type SliderProps = {
  clickType?: string;
  activeLaunchesList: LaunchEl[];
};
export default function TourCards({
  clickType = "right",
  activeLaunchesList,
}: SliderProps) {
  const [pageType, setPageType] = useRecoilState<string>(currentPage);
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
                    ? "launches-list-right"
                    : "launches-list-left"
                  : ""
              }
              timeout={400}
            >
              <TourCardWrapper
                launch={launch}
                liIndex={i}
                pageType={pageType}
              ></TourCardWrapper>
            </CSSTransition>
          ))}
      </TransitionGroupStyled>
    </>
  );
}
