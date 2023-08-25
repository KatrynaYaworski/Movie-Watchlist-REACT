import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({
  list,
  page,
  movieList,
  setPage,
  addMovie,
  removeMovie,
}) {
  const decrement = () => setPage(page - 1);
  const increment = () => setPage(page + 1);

  const movieDisplay = movieList.map((movie) => {
     return <MovieCard key={movie.id} addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie}/>;
  });

  return (
    <div className="page">
      <h1>Katryna's Movie Theater!</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container"> 
        <button onClick={()=> {page !== 1 && decrement()}}>Previous</button> {/* onClick expects a callback function.  */}
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
