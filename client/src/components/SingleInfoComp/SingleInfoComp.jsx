import React from "react";
import {
  BgImg,
  Overlay,
  SingleInfoSec,
  InfoWrapper,
  ImgBox,
  ImgCover,
  Backbtn,
  InfoBox,
  Title,
  Desc,
  InfoItems,
  Item,
  InfoBox2,
  InfoItems2,
  Item2,
  Related2,
  RelImg,
} from "./StyleInfoSingle";
import { Link } from "react-router-dom";
import { ImgFit } from "../../Variables";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const SingleInfoComp = ({ movie }) => {
  let { title } = useParams();
  const { allMovies } = useHomeContext();

  // SINGLE GENRE
  let singleGenre = movie.genre.split(",");
  // console.log(singleGenre);

  // RELATED MOVIES
  const relatedMovies = allMovies.filter((move) => {
    let genre = move.genre.split(",");
    // genre = [...new Set(genre)];
    if (
      (genre.includes(singleGenre[0]) || genre.includes(singleGenre[1])) &&
      move.title !== movie.title
    ) {
      return move;
    } else {
      return "";
    }
  });

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
      <SingleInfoSec>
        <BgImg>
          <ImgFit src={movie.hover} />
          <Overlay />
        </BgImg>
        <InfoWrapper>
          <ImgBox>
            <ImgCover>
              <Link to={{ pathname: `/single/${movie.title}`, movie: movie }}>
                <ImgFit src={movie.background} />
              </Link>
            </ImgCover>
            <Link to={{ pathname: `/single/${movie.title}`, movie: movie }}>
              <Backbtn>Go back</Backbtn>
            </Link>
          </ImgBox>
          <InfoBox>
            <Title>{movie.title}</Title>
            <Desc>{movie.desc}</Desc>
            <InfoItems>
              {movie.releaseDate && (
                <Item>
                  <p>
                    Release Date | <span>{movie.releaseDate}</span>
                  </p>
                </Item>
              )}
              {movie.director && (
                <Item>
                  <p>
                    director | <span>{movie.director}</span>
                  </p>
                </Item>
              )}
              {movie.music && (
                <Item>
                  <p>
                    music | <span>{movie.music}</span>
                  </p>
                </Item>
              )}
              {movie.cast && (
                <Item>
                  <p>
                    cast |{" "}
                    <span>
                      {movie.cast.length > 30
                        ? movie.cast.slice(0, 30) + " .."
                        : movie.cast || ""}
                    </span>
                  </p>
                </Item>
              )}
            </InfoItems>
          </InfoBox>
          <InfoBox2>
            <InfoItems2>
              <Item2>
                <p>
                  type | <span>{movie.type}</span>
                </p>
              </Item2>
              {movie.year && (
                <Item2>
                  <p>
                    year | <span>{movie.year}</span>
                  </p>
                </Item2>
              )}
              {movie.genre && (
                <Item2>
                  <p>
                    genre | <span>{movie.genre}</span>
                  </p>
                </Item2>
              )}
              {movie.imdb && (
                <Item2 className="imdb">
                  <p>
                    imdb | <span>{movie.imdb}</span>
                  </p>
                </Item2>
              )}
              {movie.rotten && (
                <Item2 className="rotten">
                  <p>
                    rotten | <span>{movie.rotten}</span>
                  </p>
                </Item2>
              )}
            </InfoItems2>
            {relatedMovies.length > 0 && (
              <Related2>
                <Slider {...settings}>
                  {relatedMovies.map((related, indx) => {
                    return (
                      <RelImg key={indx}>
                        <Link
                          to={{
                            pathname: `/single/${related.title}`,
                            movie: related,
                          }}
                        >
                          <ImgFit src={related.background} />
                        </Link>
                      </RelImg>
                    );
                  })}
                </Slider>
              </Related2>
            )}
          </InfoBox2>
        </InfoWrapper>
      </SingleInfoSec>
    </>
  );
};
