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

export const EditUserComp = ({ user }) => {
  return (
    <>
      <EditInfoSec>
        <TitleImgBox>
          <H4>{user.username}</H4>
          <SmallImg>
            <ImgFit src={user.profilePic} />
          </SmallImg>
        </TitleImgBox>
        <InfoBox>
          <Para>
            firstname | <Span>{user.firstname}</Span>
          </Para>
          <Para>
            lastname | <Span>{user.lastname}</Span>
          </Para>
          <Para>
            email | <Span>{user.email}</Span>
          </Para>
        </InfoBox>
        <BackBtn to={"/allusers"}>Go back</BackBtn>
      </EditInfoSec>
    </>
  );
};
