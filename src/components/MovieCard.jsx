import React from "react";

function MovieCard({ movie, addMovie, removeMovie, list }) {
  const inWatchlist = list.find((watchlistMovie) => watchlistMovie.id === movie.id); //filter returns an array vs find locates the exact element in the array*

  const button =
    !inWatchlist ? ( // find does not return an array so no need to check the length
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
}

export default MovieCard;
