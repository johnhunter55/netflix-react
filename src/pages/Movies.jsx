import React, { useState } from "react";
import useMovies from "../hooks/useMovies.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { StatusMessage } from "../components/StatusMessage.jsx";
import { MovieList } from "../components/MovieList.jsx";
import { NavLink } from "react-router-dom";

export function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);

  return (
    <div className="flex flex-col w-full items-center relative">
      <div className="w-full pt-6 pb-1">
        <h1 className="text-white text-3xl font-bold text-center px-4">
          Search for movies, shows, and more
        </h1>
      </div>

      <div className="sticky top-0 z-10 flex flex-col items-center gap-5 pt-4 pb-6 w-full bg-neutral-800/70 backdrop-blur-xl ">
        <StatusMessage
          isLoading={isLoading}
          error={error}
          movies={movies}
          searchTerm={searchTerm}
        />

        <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="w-full max-w-screen-2xl px-6 pt-6 pb-12">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
