import React, { useState, useEffect } from "react";
import { storage } from "firebase";
import {
  InputStyled,
  LabelStyled,
  SelectStyled,
  H4,
  TextStyled,
  Button,
  Span,
} from "ConstComponents";
import { Form } from "./CreateFormStyle";
import { useHistory } from "react-router-dom";
import { CreateMovieApi } from "contexts/MovieContext/apiCall";
import { useMovieContext } from "contexts";

export const CreateMovieForm = () => {
  const history = useHistory();
  // movie context
  const { dispatch } = useMovieContext();
  const [movieInfos, setMovieInfos] = useState(null);
  // files state
  const [background, setBackground] = useState(null);
  const [hover, setHover] = useState(null);
  const [video, setVideo] = useState(null);
  // upload state
  // const [uploaded, setuploaded] = useState(0);
  const [progress, setProgress] = useState(0);

  const changeHandler = (e) => {
    const value = e.target.value;
    setMovieInfos({ ...movieInfos, [e.target.name]: value });
  };
  console.log(movieInfos);

  useEffect(() => {
    if (background && hover && video) {
      setProgress(0);
    }
  }, [background, hover, video]);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadtask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadtask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (err) => console.log(err),
        () => {
          uploadtask.snapshot.ref.getDownloadURL().then((url) =>
            setMovieInfos((prev) => {
              return { ...prev, [item.label]: url };
            })
          );
        }
      );
    });
  };
  const uploadHandler = (e) => {
    e.preventDefault();
    upload([
      { file: background, label: "background" },
      { file: hover, label: "hover" },
      { file: video, label: "video" },
    ]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    CreateMovieApi(movieInfos, dispatch);
    if (CreateMovieApi) {
      history.push("/allproducts");
    }
  };
  return (
    <Form>
      <H4>create movie</H4>
      <form action="">
        <div className="formItem">
          <LabelStyled htmlFor="title">title</LabelStyled>
          <InputStyled
            type="text"
            id="title"
            name="title"
            placeholder={"title"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="limit">age limit</LabelStyled>
          <InputStyled
            type="text"
            id="limit"
            name="limit"
            placeholder={"limit"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="duration">duration</LabelStyled>
          <InputStyled
            type="text"
            id="duration"
            name="duration"
            placeholder={"duration"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="genre">genre</LabelStyled>
          <InputStyled
            type="text"
            id="genre"
            name="genre"
            placeholder={"genre"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="year">year</LabelStyled>
          <InputStyled
            type="text"
            id="year"
            name="year"
            placeholder={"year"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="imdb">imdb</LabelStyled>
          <InputStyled
            type="text"
            id="imdb"
            name="imdb"
            placeholder={"imdb"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="rotten">rotten</LabelStyled>
          <InputStyled
            type="text"
            id="rotten"
            name="rotten"
            placeholder={"rotten"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="director">director</LabelStyled>
          <InputStyled
            type="text"
            id="director"
            name="director"
            placeholder={"director"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="music">music</LabelStyled>
          <InputStyled
            type="text"
            id="music"
            name="music"
            placeholder={"music"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="releaseDate">releaseDate</LabelStyled>
          <InputStyled
            type="text"
            id="releaseDate"
            name="releaseDate"
            placeholder={"releaseDate"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="type">type</LabelStyled>
          <SelectStyled
            type="text"
            id="type"
            name="type"
            placeholder={"type"}
            onChange={changeHandler}
          >
            <option value="movies">movies</option>
            <option value="series">series</option>
          </SelectStyled>
        </div>
        <div className="formItem-text">
          <LabelStyled htmlFor="desc">description</LabelStyled>
          <TextStyled
            id="desc"
            name="desc"
            placeholder={"desc"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem-text">
          <LabelStyled htmlFor="cast">cast</LabelStyled>
          <TextStyled
            id="cast"
            name="cast"
            placeholder={"cast"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="video">video</LabelStyled>
          <InputStyled
            type="file"
            id="video"
            name="video"
            placeholder={"video"}
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="background">background</LabelStyled>
          <InputStyled
            type="file"
            id="background"
            name="background"
            placeholder={"background"}
            onChange={(e) => setBackground(e.target.files[0])}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="hover">hover</LabelStyled>
          <InputStyled
            type="file"
            id="hover"
            name="hover"
            placeholder={"hover"}
            onChange={(e) => setHover(e.target.files[0])}
          />
        </div>
        <Button
          disabled={background && hover && video ? false : true}
          onClick={submitHandler}
        >
          Create
        </Button>

        {background && hover && video && (
          <div className="uploadBox">
            {progress !== 100 ? (
              <Span>the upload in progress {progress} %</Span>
            ) : (
              <Span>the upload is complited now you can create</Span>
            )}

            <Button className="upload" onClick={uploadHandler}>
              upload
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};
