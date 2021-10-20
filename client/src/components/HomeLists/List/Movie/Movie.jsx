import React, { useState, useEffect } from "react";
import { axiosInstance } from "config";

import { ImgFit, VideoFit } from "../../../../Variables";
import {
  MovieBg,
  MovieOverlay,
  HoverLink,
  MovieBgHover,
  // PlayBtn,
  MovieContent,
  MovieTitle,
  DurationAndYear,
  MovieDesc,
  GenreAndSocials,
  MovieItemSec,
} from "./StyleMovie";
// THIS COMPONENT IS A LOOP
export const Movie = ({ movieId }) => {
  const [hovered, setHovered] = useState(false);
  const [movie, setMovie] = useState([]);

  // GETTING Movies FROM API
  useEffect(() => {
    const getListMovies = async () => {
      try {
        const res = await axiosInstance.get("movie/find/" + movieId, {
          headers: {
            token:
              "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListMovies();
  }, [movieId]);

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
      {movie && (
        <MovieItemSec
          onMouseEnter={() => hoverHandler("hover")}
          onMouseLeave={() => hoverHandler("leave")}
        >
          {hovered ? (
            <HoverLink
              to={{ pathname: `/single/${movie.title}`, movie: movie }}
            >
              <MovieBgHover>
                <ImgFit src={movie.hover} />
              </MovieBgHover>
              {/* <MovieBgHover>
                  <VideoFit src={movie.video} autoPlay muted loop />
                </MovieBgHover> */}
              <MovieContent>
                <MovieTitle>
                  <h4>{movie.title}</h4>
                </MovieTitle>
                <DurationAndYear>
                  <span>Duration | {movie.duration}</span>
                  <span>Year | {movie.year}</span>
                </DurationAndYear>
                {movie.desc && (
                  <MovieDesc>
                    <p>
                      {movie.desc.length > 120
                        ? movie.desc.slice(0, 120) + " . . ."
                        : movie.desc || "no description ..."}
                    </p>
                  </MovieDesc>
                )}
                <GenreAndSocials>
                  <span>Genre | {movie.genre}</span>
                </GenreAndSocials>
              </MovieContent>
            </HoverLink>
          ) : (
            <>
              <HoverLink
                to={{
                  pathname: `/single/${movie.title}`,
                  movie: { movie },
                }}
              >
                <MovieBg>
                  <ImgFit src={movie.background} />
                </MovieBg>
                <MovieOverlay />
              </HoverLink>
            </>
          )}
        </MovieItemSec>
      )}
    </>
  );
};
