export const GetMovieStart = () => ({
  type: "Movie_start",
});
export const GetMovieSuccess = (movies) => ({
  type: "Movie_success",
  payload: movies,
});
export const GetMovieFailed = () => ({
  type: "Movie_failed",
});
// delete actions
export const DeleteMovieStart = () => ({
  type: "delete_Movie_start",
});
export const DeleteMovieSuccess = (id) => ({
  type: "delete_Movie_success",
  payload: id,
});
export const DeleteMovieFailed = () => ({
  type: "delete_Movie_failed",
});
// create actions
export const CreateMovieStart = () => ({
  type: "create_Movie_start",
});
export const CreateMovieSuccess = (movie) => ({
  type: "create_Movie_success",
  payload: movie,
});
export const CreateMovieFailed = () => ({
  type: "create_Movie_failed",
});
// update actions
export const UpdateMovieStart = () => ({
  type: "update_Movie_start",
});
export const UpdateMovieSuccess = (movie) => ({
  type: "update_Movie_success",
  payload: movie,
});
export const UpdateMovieFailed = () => ({
  type: "update_Movie_failed",
});
