import React, { useState } from "react";
import { Header } from "./assets/components/Header.jsx";
import useMovies from "./assets/components/useMovies.jsx";
import { SearchBar } from "./assets/components/SearchBar.jsx";
import { StatusMessage } from "./assets/components/StatusMessage.jsx";
import { MovieList } from "./assets/components/MovieList.jsx";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);
  return (
    <div className="flex flex-col bg-neutral-800 min-h-screen w-full items-center gap-8 pb-10">
      {" "}
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <StatusMessage
        isLoading={isLoading}
        error={error}
        movies={movies}
        searchTerm={searchTerm}
      />
      <div className="w-full max-w-6xl px-6">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
