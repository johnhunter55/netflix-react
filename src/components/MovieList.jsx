import React from "react";
import { NavLink } from "react-router-dom";
import { MovieCard } from "./MovieCard.jsx";

export function MovieList({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <NavLink
          key={movie.imdbID}
          to={`/details/${movie.imdbID}`}
          state={{ movie }}
        >
          <MovieCard movie={movie} />
        </NavLink>
      ))}
    </div>
  );
}
