import axios from "axios";
import {
  GetMovieStart,
  GetMovieSuccess,
  GetMovieFailed,
  DeleteMovieStart,
  DeleteMovieSuccess,
  DeleteMovieFailed,
  CreateMovieStart,
  CreateMovieSuccess,
  CreateMovieFailed,
  UpdateMovieStart,
  UpdateMovieSuccess,
  UpdateMovieFailed,
} from "./MovieAction";

export const MovieApi = async (dispatch) => {
  dispatch(GetMovieStart());
  try {
    const res = await axios.get("movie/all", {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(GetMovieSuccess(res.data));
  } catch (err) {
    dispatch(GetMovieFailed());
  }
};
// delete movie
export const DeleteMovieApi = async (id, dispatch) => {
  dispatch(DeleteMovieStart());
  try {
    await axios.delete("movie/" + id, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(DeleteMovieSuccess(id));
  } catch (err) {
    dispatch(DeleteMovieFailed());
  }
};
// create movie
export const CreateMovieApi = async (movie, dispatch) => {
  dispatch(CreateMovieStart());
  try {
    const res = await axios.post("movie", movie, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(CreateMovieSuccess(res.data));
  } catch (err) {
    dispatch(CreateMovieFailed());
  }
};

// update movie
export const UpdateMovieApi = async (movie, dispatch) => {
  dispatch(UpdateMovieStart());
  try {
    const res = await axios.put("movie/" + movie._id, movie, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(res.data);
    dispatch(UpdateMovieSuccess(res.data));
  } catch (err) {
    dispatch(UpdateMovieFailed());
  }
};
