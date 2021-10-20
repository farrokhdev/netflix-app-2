import React from "react";
import { SingleVideoSec, GobackBtn } from "./StyleSingleVideo";
import { Link, useParams } from "react-router-dom";
import { VideoFit } from "../../Variables";
import { useHomeContext } from "../../context/HomeContext/HomeContext";
import { ArrowBack } from "@material-ui/icons";

export const SingleVideoComp = ({ movie }) => {
  console.log(movie);

  return (
    <>
      <SingleVideoSec>
        <Link to={{ pathname: `/single/${movie.title}`, movie: movie }}>
          <GobackBtn>
            <ArrowBack />
            Go back
          </GobackBtn>
        </Link>
        <VideoFit src={movie.video} autoPlay muted loop controls />
      </SingleVideoSec>
    </>
  );
};
