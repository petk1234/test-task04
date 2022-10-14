import { DivFlex } from "../atoms/DivFlex";
import { Img } from "../atoms/Img";
import { ScrollLinkStyled } from "../atoms/ScrollLinkStyled";
import React from "react";

type GreetingsProps = {
  greetImg: string;
  pageType: string;
  children: React.ReactNode;
};
export default function Greetings({
  greetImg,
  pageType,
  children,
}: GreetingsProps) {
  return (
    <DivFlex column width="100%" height="100%">
      <DivFlex column width="1400px" height="100%">
        <Img src={greetImg} />
        {children}
        {pageType === "" && (
          <DivFlex width="400px" column absolute bottom="10px">
            <ScrollLinkStyled
              activeClass="active"
              to="tours"
              spy={true}
              smooth={true}
              offset={300}
              duration={500}
            >
              Explore tours
            </ScrollLinkStyled>
          </DivFlex>
        )}
      </DivFlex>
    </DivFlex>
  );
}
