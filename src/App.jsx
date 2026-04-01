import React, { useState } from "react";
import { Header } from "./components/Header.jsx";
import useMovies from "./components/useMovies.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { StatusMessage } from "./components/StatusMessage.jsx";
import { MovieList } from "./components/MovieList.jsx";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);
  return (
    <div className="flex flex-col bg-neutral-800 min-h-screen w-full items-center gap-5 pb-10">
      {" "}
      <Header />
      <h1 className="text-white text-3xl mt-2 font-bold ">
        Search for movies, shows, and more
      </h1>
      <StatusMessage
        isLoading={isLoading}
        error={error}
        movies={movies}
        searchTerm={searchTerm}
      />
      <SearchBar onSearch={setSearchTerm} />
      <div className="w-full max-w-6xl px-6">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
