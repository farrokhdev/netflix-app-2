import React from "react";
import {
  InputStyled,
  TextStyled,
  SelectStyled,
  LabelStyled,
  H4,
  Button,
} from "ConstComponents";
import { Form } from "./EditFormStyle";
import { useHomeContext } from "contexts";

export const ListForm = ({ list }) => {
  const { allMovies } = useHomeContext();

  const filteredMovies = allMovies.filter((movie) =>
    list.content.includes(movie._id)
  );
  console.log(filteredMovies);
  return (
    <Form>
      <H4>edit list</H4>
      <form action="">
        <div className="formItem">
          <LabelStyled htmlFor="title">title</LabelStyled>
          <InputStyled
            type="text"
            id="title"
            name="title"
            placeholder={list.title}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="type">type</LabelStyled>
          <InputStyled
            type="text"
            id="type"
            name="type"
            placeholder={list.type}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="genre">genre</LabelStyled>
          <InputStyled
            type="genre"
            id="genre"
            name="genre"
            placeholder={list.genre}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="content">content</LabelStyled>
          <SelectStyled
            multiple
            id="content"
            name="content"
            placeholder={list.content}
          >
            {filteredMovies.map((movie) => {
              return (
                <>
                  <option value={movie._id}>{movie.title}</option>
                </>
              );
            })}
          </SelectStyled>
        </div>

        <Button>Update</Button>
      </form>
    </Form>
  );
};
