import React, { useState } from "react";
import {
  InputStyled,
  TextStyled,
  LabelStyled,
  H4,
  Button,
  SelectStyled,
} from "ConstComponents";
import { useHistory } from "react-router-dom";
import { Form } from "./CreateFormStyle";
import { useListContext, useMovieContext, useHomeContext } from "contexts";
import { CreateListApi } from "contexts/ListContext/apiCall";

export const CreateListForm = () => {
  const { dispatch } = useListContext();
  // const { movies, dispatch: movieDispatch } = useMovieContext();
  const { allMovies, dispatch: movieDispatch } = useHomeContext();

  const history = useHistory();

  const [list, setList] = useState();

  const changeHandler = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  const selectHandler = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log(value);
    setList({ ...list, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    CreateListApi(list, dispatch);
    if (CreateListApi) {
      history.push("/alllist");
    }
  };
  return (
    <Form>
      <H4>create list</H4>
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
          <LabelStyled htmlFor="type">type</LabelStyled>
          <SelectStyled
            type="text"
            id="type"
            name="type"
            onChange={changeHandler}
          >
            <option>type</option>
            <option value="movies">movies</option>
            <option value="series">series</option>
          </SelectStyled>
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="genre">genre</LabelStyled>
          <InputStyled
            type="genre"
            id="genre"
            name="genre"
            placeholder={"genre"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="content">content</LabelStyled>
          <SelectStyled
            multiple
            id="content"
            name="content"
            placeholder={"content"}
            onChange={selectHandler}
          >
            {allMovies.map((movie, indx) => {
              return (
                <option key={indx} value={movie._id}>
                  {movie.title}
                </option>
              );
            })}
          </SelectStyled>
        </div>

        <Button onClick={submitHandler}>Create</Button>
      </form>
    </Form>
  );
};
