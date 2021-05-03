export const ADD_MOVIES = "ADD_MOVIES";   ///// action types


export function addMovies(movies) {       ///// action creators
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}
