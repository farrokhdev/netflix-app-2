import { Movie } from "@material-ui/icons";
import { H4, ImgFit, Para, Span } from "ConstComponents";
import React from "react";
import {
  TitleImgBox,
  SmallImg,
  InfoBox,
  CastBox,
  EditInfoSec,
  BackBtn,
} from "./StyleEdit";

export const EditListComp = ({ list }) => {
  return (
    <>
      <EditInfoSec>
        <TitleImgBox>
          <H4>{list.title}</H4>
        </TitleImgBox>
        <InfoBox>
          <Para>
            Type | <Span>{list.type}</Span>
          </Para>
          <Para>
            Genre | <Span>{list.genre}</Span>
          </Para>
        </InfoBox>
        <BackBtn to={"/alllist"}>Go back</BackBtn>
      </EditInfoSec>
    </>
  );
};
