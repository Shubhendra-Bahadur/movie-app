import React from "react";
import "./App.css";
import { data } from "./data";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { addMovies } from "./actions/index";
import { setShowFavourites } from "./actions/index";
// import { connect } from "./index";
import { connect } from "react-redux";
// import reactDom from "react-dom";

class App extends React.Component {
  // console.log(props);
  componentDidMount() {
    //mke api call
    this.props.dispatch(addMovies(data));

    // console.log("after state", store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (value) => {
    this.props.dispatch(setShowFavourites(value));
  };
  render() {
    // const props=this.props;
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies; //{movies:{},search:{}}
    // console.log("render", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }


function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search
  }
}
const connectedAppComponents=connect(mapStateToProps)(App);

export default connectedAppComponents;
