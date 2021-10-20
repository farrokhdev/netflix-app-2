import React, { useState } from "react";
import { ImgFit } from "../../../../Variables";
import {
  MovieBg,
  MovieOverlay,
  HoverLink,
  MovieBgHover,
  MovieContent,
  MovieTitle,
  DurationAndYear,
  MovieDesc,
  GenreAndSocials,
  MovieItemSec,
} from "./StyleMovie";
// THIS COMPONENT IS A LOOP
export const Movie = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  // HOVER FUNCTION
  const hoverHandler = (on) => {
    if (on === "hover") {
      setHovered(true);
    }
    if (on === "leave") {
      setHovered(false);
    }
  };

  return (
    <>
      <MovieItemSec
        onMouseEnter={() => hoverHandler("hover")}
        onMouseLeave={() => hoverHandler("leave")}
      >
        {hovered ? (
          <>
            <HoverLink to={{ pathname: `/single/${movie.title}` }}>
              <MovieBgHover>
                <ImgFit src={movie.image} />
              </MovieBgHover>
              <MovieContent>
                <MovieTitle>
                  <h4>{movie.fullTitle}</h4>
                </MovieTitle>
                <DurationAndYear>
                  <span>Year | {movie.year}</span>
                </DurationAndYear>
                <GenreAndSocials>
                  <span>Rank | {movie.rank}</span>
                  <span>Imdb Rate | {movie.imDbRating}</span>
                </GenreAndSocials>
              </MovieContent>
            </HoverLink>
          </>
        ) : (
          <>
            <HoverLink to={{ pathname: `/single/${movie.title}` }}>
              <MovieBg>
                <ImgFit src={movie.image} />
              </MovieBg>
              <MovieOverlay />
            </HoverLink>
          </>
        )}
      </MovieItemSec>
    </>
  );
};
