export const ADD_MOVIES = "ADD_MOVIES"; ///// action types
export const ADD_FAVOURITES = "ADD_FAVOURITES"; ///// action types
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES"; ///// action types
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"; ///// action types
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST"; ///// action types
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"; ///// action types

export function addMovies(movies) {
  ///// action creators
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {
  ///// action creators
  return {
    type: ADD_FAVOURITES,
    movie: movie,
  };
}

export function removeFavourites(movie) {
  ///// action creators
  return {
    type: REMOVE_FAVOURITES,
    movie: movie,
  };
}

export function setShowFavourites(value) {
  ///// action creators
  return {
    type: SET_SHOW_FAVOURITES,
    value,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=df021e36&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        //dispatch an action
        // dispatch({
        //   type: ADD_SEARCH_RESULT,
        //   movie,
        // });
        dispatch(addMovieToSearchResult(movie));
      });
  };
}

export function addMovieToSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
