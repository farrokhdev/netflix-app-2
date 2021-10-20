import React, { useState } from "react";
import {
  BgImg,
  Overlay,
  LoadingDiv,
  TitleBox,
  Title,
  Desc,
  Btns,
  InfoBtn,
  WatchBtn,
  PlayIcon,
  HeroSec,
} from "./StyleHomeHero";
import { Info } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ImgFit } from "../../Variables";
// import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const HomeHero = ({ randomMovie }) => {
  // const { movieGenre, singleMovie, path, filtLists } = useHomeContext();
  // const [gnrOpen, setGnrOpen] = useState(false);
  // const [chooseGnre, setChooseGnre] = useState("All genres");
  // console.log(randomMovie);

  return (
    <>
      <HeroSec>
        {randomMovie.length ? (
          <>
            <BgImg>
              <ImgFit src={randomMovie[0].hover} />
              <Overlay />
            </BgImg>
            <TitleBox>
              <Title>{randomMovie[0].title}</Title>
              <Desc>{randomMovie[0].desc}</Desc>
              <Btns>
                <Link
                  to={{
                    pathname: `/single/${randomMovie[0].title}/video`,
                    movie: randomMovie[0],
                  }}
                >
                  <WatchBtn>
                    Watch movie <PlayIcon />
                  </WatchBtn>
                </Link>
                <Link
                  to={{
                    pathname: `/single/${randomMovie[0].title}`,
                    movie: randomMovie[0],
                  }}
                >
                  <InfoBtn>
                    More Info <Info />
                  </InfoBtn>
                </Link>
              </Btns>
            </TitleBox>
          </>
        ) : (
          <LoadingDiv>
            <h1>Loading ...</h1>
          </LoadingDiv>
        )}
      </HeroSec>
    </>
  );
};
