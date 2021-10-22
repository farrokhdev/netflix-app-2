import React from "react";
import { device } from "responsive/device";
import { ListSec, ListTitle } from "./StyleList";
import { Movie } from "./Movie/Movie";

// FOR SLICK SLIDER
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const List = ({ list }) => {
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
        breakpoint: device.laptop,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: device.tablet,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: device.mobileL,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: device.mobileM,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: device.mobileS,
        settings: {
          slidesToShow: 1,
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
