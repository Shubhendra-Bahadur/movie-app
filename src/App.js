import React from "react";
import "./App.css";
import { data } from "./data";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { addMovies } from "./actions/index";
import { setShowFavourites } from "./actions/index";
// import reactDom from "react-dom";

class App extends React.Component {
  // console.log(props);
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    //mke api call
    store.dispatch(addMovies(data));

    console.log("after state", store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  };
  render() {
    // const props=this.props;
    const {movies,search}=this.props.store.getState();
    const { list, favourites, showFavourites } = movies;  //{movies:{},search:{}}
    console.log("render", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No Movies to Display</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
