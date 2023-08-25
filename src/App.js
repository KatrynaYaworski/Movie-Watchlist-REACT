import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/Watchlist";
const { REACT_APP_API_KEY } = process.env;

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]); // watchList
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
      }).catch(error => console.log(error))
  }
  useEffect(() => { //
    getData(); //runs api call on page load
  }, [page]); // will fire getData again only when the dependancy 'page' changes

  function addMovie(movie) {
    setList([...list, movie]); //Taking a copy of the watch list and adding a movie
  }

  function removeMovie(movie) {
    const newState = list.filter((watchListMovie) => { //watch list to include all that is not the selected movie.
      return watchListMovie.id !== movie.id; // should never compare objects because they are reference values. **included .id to account for this.
    });
    setList(newState); //setting watch list to new state declared above ^^
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList
          list={list}
          removeMovie={removeMovie}>
        </WatchList>
      </main>
    </div>
  );
}

export default App;
