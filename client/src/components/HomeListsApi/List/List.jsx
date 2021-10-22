import React from "react";
import { ListSec, ListWrapper } from "./StyleList";
import { Movie } from "./Movie/Movie";

export const List = ({ movies250, type }) => {
  return (
    <>
      <ListSec>
        <ListWrapper>
          {movies250.length ? (
            movies250.map((movie, index) => <Movie movie={movie} key={index} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </ListWrapper>
      </ListSec>
    </>
  );
};
