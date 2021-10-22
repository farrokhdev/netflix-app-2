import React from "react";
import {
  BgImg,
  Overlay,
  LoadingDiv,
  TitleBox,
  Title,
  HeroSec,
  HomeBtn,
} from "./StyleHomeHero";
import { ImgFit } from "../../Variables";
import { useHomeContext } from "../../context/HomeContext/HomeContext";
import { useApiHomeContext } from "../../context/ApiHomeContext/ApiHomeContext";
import { Link } from "react-router-dom";

export const HomeHeroApi = ({ type }) => {
  const { movies250 } = useApiHomeContext();

  return (
    <>
      <HeroSec>
        {movies250.length > 1 ? (
          <BgImg>
            <ImgFit src={movies250[0].image} />

            <Overlay />
          </BgImg>
        ) : (
          <LoadingDiv>
            <h1>Loading ...</h1>
          </LoadingDiv>
        )}
        <TitleBox>
          <Title>250 imdb {type} </Title>
        </TitleBox>
        <Link to="/">
          <HomeBtn>Go back</HomeBtn>
        </Link>
      </HeroSec>
    </>
  );
};
