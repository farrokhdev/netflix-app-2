import React, { useEffect } from "react";
import { EditSec } from "./EditStyle";
import { useLocation, useHistory } from "react-router-dom";
import { EditMovieComp } from "components/EditComp/EditMovieComp";
import { MovieForm } from "components/FormsComp/EditForms/MovieForm";

export const EditProduct = () => {
  let location = useLocation();
  let history = useHistory();
  const movie = location.movie;

  console.log(movie);

  useEffect(() => {
    if (!location.movie) {
      history.push("/allproducts");
    }
  });

  return (
    <>
      {movie && (
        <EditSec>
          <EditMovieComp movie={movie} />
          <MovieForm movie={movie} />
        </EditSec>
      )}
    </>
  );
};
