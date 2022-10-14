import { Img } from "../atoms/Img";
import { TitleText } from "../atoms/TitleText";
import { Button } from "../atoms/Button";
import { LaunchEl } from "../../types";
import { ListEl } from "../atoms/ListEl";
import { DivFlex } from "../atoms/DivFlex";
import { Text } from "../atoms/Text";
import React from "react";
type CardProps = {
  launch: LaunchEl;
  liIndex: number;
  pageType?: string;
  children: React.ReactNode;
};
export default function Card({
  launch,
  liIndex,
  pageType,
  children,
}: CardProps) {
  return (
    <ListEl pageType={pageType} liIndex={liIndex}>
      <Img
        src={
          launch.flight.links.flickr_images !== null
            ? launch.flight.links.flickr_images[0]
            : ""
        }
        width="411px"
        height="296px"
      />
      <TitleText titleSize={24} bold>
        {launch.title}
      </TitleText>
      <Text>{launch.flight.mission_name}</Text>
      <DivFlex width="350px" justifyContent="space-between">
        <Button height="53px">BUY</Button>
        {children}
      </DivFlex>
    </ListEl>
  );
}
