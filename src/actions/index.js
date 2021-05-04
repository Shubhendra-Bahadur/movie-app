export const ADD_MOVIES = "ADD_MOVIES";   ///// action types
export const ADD_FAVOURITES = "ADD_FAVOURITES";   ///// action types
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";   ///// action types
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";   ///// action types




export function addMovies(movies) {       ///// action creators
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {       ///// action creators
  return {
    type: ADD_FAVOURITES,
    movie:movie 
  };
}

export function removeFavourites(movie) {       ///// action creators
  return {
    type: REMOVE_FAVOURITES,
    movie:movie 
  };
}

export function setShowFavourites(value) {       ///// action creators
  return {
    type: SET_SHOW_FAVOURITES,
    value 
  };
}
