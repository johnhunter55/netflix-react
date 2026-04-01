import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput, onSearch]);

  return (
    <div className="relative group w-full max-w-2xl">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors duration-300 pointer-events-none group-focus-within:text-white" />

      <input
        type="text"
        placeholder="Search movies, shows, genres..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full py-3 pl-12 pr-12 text-white bg-zinc-900/40 border border-white/10 rounded-full outline-none backdrop-blur-md transition-all duration-300 placeholder:text-zinc-500 hover:bg-zinc-900/60 hover:border-white/20 focus:bg-zinc-900/80 focus:border-white/40 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      />

      {searchInput && (
        <button
          onClick={() => setSearchInput("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors duration-200"
          aria-label="Clear search"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}
