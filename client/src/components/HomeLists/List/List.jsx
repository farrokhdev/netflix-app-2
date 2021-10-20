import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../responsive";
import { ListSec, ListTitle, ListWrapper } from "./StyleList";
import { Movie } from "./Movie/Movie";

// FOR SLICK SLIDER
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const List = ({ list, type, loading }) => {
  const movieIds = list.content;
  console.log(movieIds);

  // SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    touchMove: true,
    // variableWidth: true,
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
      {movieIds && (
        <>
          {movieIds.length ? (
            <ListSec>
              <ListTitle>
                <h3>{list.title}</h3>
              </ListTitle>

              <Slider {...settings}>
                {movieIds.map((movieId, indx) => {
                  return <Movie movieId={movieId} key={indx} />;
                })}
              </Slider>
            </ListSec>
          ) : (
            <ListSec>
              <ListTitle>
                <h3>"sorry the list is empty</h3>
              </ListTitle>
            </ListSec>
          )}
        </>
      )}
    </>
  );
};
