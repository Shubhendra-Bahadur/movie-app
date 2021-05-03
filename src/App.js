import React from "react";
import "./App.css";
import { data } from "./data";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import {addMovies} from "./actions/index"
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
  render() {
    // const props=this.props;
    const movies = this.props.store.getState();
    console.log("render");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
