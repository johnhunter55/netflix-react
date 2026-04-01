import React from "react";

export function StatusMessage({ isLoading, error, movies, searchTerm }) {
  if (isLoading) {
    return (
      <p className="text-zinc-400 text-center animate-pulse">
        Searching the database...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-400 text-center bg-red-900/20 py-2 rounded-lg">
        {error}
      </p>
    );
  }

  if (!searchTerm) {
    return (
      <p className="text-zinc-500 text-center text-lg">
        Start typing to explore movies...
      </p>
    );
  }

  if (movies?.length > 0) {
    return (
      <p className="text-zinc-400 text-center">
        Found {movies.length} results for "{searchTerm}"
      </p>
    );
  }

  return null;
}
