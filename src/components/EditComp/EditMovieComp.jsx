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

export const EditMovieComp = ({ movie }) => {
  return (
    <>
      <EditInfoSec>
        <TitleImgBox>
          <H4>{movie.title}</H4>
          <SmallImg>
            <ImgFit src={movie.hover} />
          </SmallImg>
        </TitleImgBox>
        <InfoBox>
          <Para>
            Type | <Span>{movie.type}</Span>
          </Para>
          <Para>
            Genre | <Span>{movie.genre}</Span>
          </Para>
          <Para>
            Year | <Span>{movie.year}</Span>
          </Para>
          <Para>
            Releasedate | <Span>{movie.releaseDate}</Span>
          </Para>
          <Para>
            duration | <Span>{movie.duration}</Span>
          </Para>
          <Para>
            music | <Span>{movie.music}</Span>
          </Para>
          <Para>
            director | <Span>{movie.director}</Span>
          </Para>
          <Para>
            Imdb | <Span>{movie.imdb}</Span>
          </Para>
          <Para>
            rotten | <Span>{movie.rotten}</Span>
          </Para>
          <CastBox>
            <Para>{movie.cast}</Para>
          </CastBox>
        </InfoBox>
        <BackBtn to={"/allproducts"}>Go back</BackBtn>
      </EditInfoSec>
    </>
  );
};
