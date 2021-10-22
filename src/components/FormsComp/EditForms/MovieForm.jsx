import React, { useState } from "react";
import axios from "axios";
import {
  InputStyled,
  LabelStyled,
  SelectStyled,
  H4,
  TextStyled,
  Button,
} from "ConstComponents";
import { Form } from "./EditFormStyle";
import { UpdateMovieApi } from "contexts/MovieContext/apiCall";
import { useMovieContext } from "contexts";

export const MovieForm = ({ movie }) => {
  const { dispatch } = useMovieContext();
  const [newMovie, setNewMovie] = useState(movie);
  const [background, setBackground] = useState();
  const [video, setVideo] = useState();
  const [hover, setHover] = useState();

  console.log(newMovie.background);

  const changeHandler = (e) => {
    const value = e.target.value;
    setNewMovie({ ...newMovie, [e.target.name]: value });
  };

  console.log(newMovie);

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   UpdateMovieApi(newMovie._id, newMovie, dispatch);
  // };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("movie/" + newMovie._id, newMovie, {
        headers: {
          token:
            "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form>
      <H4>edit movie</H4>
      <form action="">
        <div className="formItem">
          <LabelStyled htmlFor="title">title</LabelStyled>
          <InputStyled
            type="text"
            id="title"
            name="title"
            value={newMovie.title}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="limit">age limit</LabelStyled>
          <InputStyled
            type="text"
            id="limit"
            name="limit"
            value={newMovie.limit}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="duration">duration</LabelStyled>
          <InputStyled
            type="text"
            id="duration"
            name="duration"
            value={newMovie.duration}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="genre">genre</LabelStyled>
          <InputStyled
            type="text"
            id="genre"
            name="genre"
            value={newMovie.genre}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="type">type</LabelStyled>
          <SelectStyled
            type="text"
            id="type"
            name="type"
            value={newMovie.type}
            onChange={changeHandler}
          >
            <option value="movies">movies</option>
            <option value="series">series</option>
          </SelectStyled>
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="year">year</LabelStyled>
          <InputStyled
            type="text"
            id="year"
            name="year"
            value={newMovie.year}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="imdb">imdb</LabelStyled>
          <InputStyled
            type="text"
            id="imdb"
            name="imdb"
            value={newMovie.imdb}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="rotten">rotten</LabelStyled>
          <InputStyled
            type="text"
            id="rotten"
            name="rotten"
            value={newMovie.rotten}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="director">director</LabelStyled>
          <InputStyled
            type="text"
            id="director"
            name="director"
            value={newMovie.director}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="music">music</LabelStyled>
          <InputStyled
            type="text"
            id="music"
            name="music"
            value={newMovie.music}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="releaseDate">releaseDate</LabelStyled>
          <InputStyled
            type="text"
            id="releaseDate"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem-text">
          <LabelStyled htmlFor="desc">description</LabelStyled>
          <TextStyled
            id="desc"
            name="desc"
            value={newMovie.desc}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem-text">
          <LabelStyled htmlFor="cast">cast</LabelStyled>
          <TextStyled
            id="cast"
            name="cast"
            value={newMovie.cast}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="video">video</LabelStyled>
          <InputStyled
            type="file"
            id="video"
            name="video"
            value={newMovie.video}
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="background">background</LabelStyled>
          <InputStyled
            type="file"
            id="background"
            name="background"
            placeholder={newMovie.background}
            onChange={(e) => setBackground(e.target.files[0])}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="hover">hover</LabelStyled>
          <InputStyled
            type="file"
            id="hover"
            name="hover"
            placeholder={newMovie.hover}
            onChange={(e) => setHover(e.target.files[0])}
          />
        </div>

        <Button onClick={handleUpdate}>update</Button>
      </form>
    </Form>
  );
};
