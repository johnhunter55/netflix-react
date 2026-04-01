import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function useMovies(searchTerm) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    if (!searchTerm) {
      setMovies([]);
      setError("");
      return;
    }

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong finding the movies");
        }
        if (ignore) return;
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        const filterd = [];
        const seenMovies = data.Search.filter((movie) => {
          if (filterd.includes(movie.imdbID)) {
            return false;
          }
          filterd.push(movie.imdbID);
          return true;
        });
        setMovies(seenMovies);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => {
      ignore = true;
    };
  }, [searchTerm]);

  return { movies, isLoading, error };
}
