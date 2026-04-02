import React, { useState } from "react";
import { Header } from "./Header.jsx";
import useMovies from "../hooks/useMovies.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { StatusMessage } from "./StatusMessage.jsx";
import { MovieList } from "./MovieList.jsx";

export function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);

  return (
    <div className="flex flex-col w-full items-center relative">
      <div className="sticky top-0 z-10 flex flex-col w-full items-center gap-5 py-6 bg-neutral-800/70 backdrop-blur-xl ">
        <h1 className="text-white text-3xl font-bold text-center px-4">
          Search for movies, shows, and more
        </h1>

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
