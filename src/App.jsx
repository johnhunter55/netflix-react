import React, { useState } from "react";
import { Header } from "./components/Header.jsx";
import useMovies from "./hooks/useMovies.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { StatusMessage } from "./components/StatusMessage.jsx";
import { MovieList } from "./components/MovieList.jsx";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);

  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-full items-center">
      <Header />
      <div className="flex flex-col w-full items-center overflow-y-auto relative flex-1">
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
    </div>
  );
}
