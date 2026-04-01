import React from "react";

export function MovieCard({ movie }) {
  const posterUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5 hover:bg-zinc-800 transition-colors duration-300 group cursor-pointer">
      <div className="aspect-2/3 overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3
          className="text-white font-semibold text-lg truncate"
          title={movie.Title}
        >
          {movie.Title}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-zinc-400 text-sm">{movie.Year}</span>
          <span className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-zinc-300 border border-white/10 uppercase tracking-wider">
            {movie.Type}
          </span>
        </div>
      </div>
    </div>
  );
}
