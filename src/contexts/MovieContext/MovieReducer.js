export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "Movie_start":
      return {
        movies: [],
        fetching: true,
        error: false,
      };
    case "Movie_success":
      return {
        movies: action.payload,
        fetching: false,
        error: false,
      };
    case "Movie_failed":
      return {
        movies: [],
        fetching: false,
        error: true,
      };
    // delete movie
    case "delete_Movie_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "delete_Movie_success":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        fetching: false,
        error: false,
      };
    case "delete_Movie_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    // create movie
    case "create_Movie_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "create_Movie_success":
      return {
        movies: [...state.movies, action.payload],
        fetching: false,
        error: false,
      };
    case "create_Movie_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    // update movie
    case "update_Movie_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "update_Movie_success":
      return {
        movies: state.movies.filter(
          (movie) => movie._id === action.payload._id
        ),
        fetching: false,
        error: false,
      };
    case "update_Movie_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
