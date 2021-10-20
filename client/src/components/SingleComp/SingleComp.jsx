import React from "react";
import { Info } from "@material-ui/icons";
import {
  BgImg,
  Overlay,
  TitleBox,
  Title,
  Desc,
  Btns,
  InfoBtn,
  WatchBtn,
  AllMovies,
  PlayIcon,
  SingleSec,
  RelatedBox,
  RelatedWrapp,
  RelatedImg,
  TrailerBox,
  TrailerTitle,
  // TrailerImg,
  TrailerVideo,
} from "./StyleSingle";
import { ImgFit, VideoFit } from "../../Variables";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// FOR SLICK SLIDER
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const SingleComp = ({ movie }) => {
  const { allMovies } = useHomeContext();

  // SINGLE GENRE
  let singleGenre = movie.genre.split(",");
  // console.log(singleGenre);

  // RELATED MOVIES
  const relatedMovies = allMovies.filter((move) => {
    let genre = move.genre.split(",");
    if (
      (genre.includes(singleGenre[0]) || genre.includes(singleGenre[1])) &&
      move.title !== movie.title
    ) {
      return move;
    } else {
      return "";
    }
  });
  // console.log(relatedMovies);

  // SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // prevArrow: <ArrowBackIos />,
    // nextArrow: <ArrowForwardIos />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SingleSec>
        <BgImg>
          <ImgFit src={movie.hover} />
          <Overlay />
        </BgImg>
        <TitleBox>
          <Title>{movie.title}</Title>
          <Desc>{movie.desc}</Desc>
          <Btns>
            <Link
              to={{
                pathname: `/single/${movie.title}/video`,
                movie: movie,
              }}
            >
              <WatchBtn>
                Watch movie <PlayIcon />
              </WatchBtn>
            </Link>

            <Link
              to={{
                pathname: `/single/${movie.title}/info`,
                movie: movie,
              }}
            >
              <InfoBtn>
                More Info <Info />
              </InfoBtn>
            </Link>
          </Btns>
          <Link to={`/${movie.type}`}>
            <AllMovies>See All List</AllMovies>
          </Link>
        </TitleBox>
        {relatedMovies.length > 0 && (
          <RelatedBox>
            <h4>Related</h4>
            <RelatedWrapp>
              <Slider {...settings}>
                {relatedMovies.map((related, indx) => {
                  return (
                    <RelatedImg key={indx}>
                      <Link
                        to={{
                          pathname: `/single/${related.title}`,
                          movie: related,
                        }}
                      >
                        <ImgFit src={related.hover} />
                      </Link>
                    </RelatedImg>
                  );
                })}
              </Slider>
            </RelatedWrapp>
          </RelatedBox>
        )}
        <TrailerBox>
          <TrailerTitle>Trailers</TrailerTitle>
          {/* <TrailerImg>
            <Link to="/">
              <ImgFit src={movie.hover} />
            </Link>
          </TrailerImg> */}
          <TrailerVideo>
            <Link to="/">
              <VideoFit src={movie.video} autoPlay muted loop />
            </Link>
          </TrailerVideo>
        </TrailerBox>
      </SingleSec>
    </>
  );
};
