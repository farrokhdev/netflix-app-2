import React, { useContext, useReducer } from "react";
import { MovieReducer } from "./MovieReducer";

const startState = {
  movies: [],
  fetching: true,
  error: false,
};

export const MovieContext = React.createContext();
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, startState);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        fetching: state.fetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
